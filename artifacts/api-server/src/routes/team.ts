import { Router, type IRouter } from "express";
import { asc, eq } from "drizzle-orm";
import { db, teamMembersTable } from "@workspace/db";
import {
  CreateTeamMemberBody,
  UpdateTeamMemberBody,
} from "@workspace/api-zod";
import { requireAdmin } from "../middlewares/admin-auth";
import { formatZodError } from "../lib/zod-error";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.get("/team", async (_req, res) => {
  try {
    const rows = await db
      .select()
      .from(teamMembersTable)
      .orderBy(asc(teamMembersTable.sortOrder), asc(teamMembersTable.id));
    return res.json(rows);
  } catch (err) {
    logger.error({ err }, "Failed to list team members");
    return res.status(500).json({ message: "Failed to list team members" });
  }
});

router.post("/team", requireAdmin, async (req, res) => {
  const parsed = CreateTeamMemberBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: formatZodError(parsed.error) });
  }
  try {
    const data = parsed.data;
    const [row] = await db
      .insert(teamMembersTable)
      .values({
        name: data.name,
        role: data.role,
        initials: data.initials,
        linkedinUrl: data.linkedinUrl ?? null,
        sortOrder: data.sortOrder ?? 0,
      })
      .returning();
    return res.status(201).json(row);
  } catch (err) {
    logger.error({ err }, "Failed to create team member");
    return res.status(500).json({ message: "Failed to create team member" });
  }
});

router.put("/team/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: "Invalid id" });
  }
  const parsed = UpdateTeamMemberBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: formatZodError(parsed.error) });
  }
  try {
    const data = parsed.data;
    const [row] = await db
      .update(teamMembersTable)
      .set({
        name: data.name,
        role: data.role,
        initials: data.initials,
        linkedinUrl: data.linkedinUrl ?? null,
        sortOrder: data.sortOrder ?? 0,
      })
      .where(eq(teamMembersTable.id, id))
      .returning();
    if (!row) return res.status(404).json({ message: "Team member not found" });
    return res.json(row);
  } catch (err) {
    logger.error({ err }, "Failed to update team member");
    return res.status(500).json({ message: "Failed to update team member" });
  }
});

router.delete("/team/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: "Invalid id" });
  }
  try {
    const [row] = await db
      .delete(teamMembersTable)
      .where(eq(teamMembersTable.id, id))
      .returning({ id: teamMembersTable.id });
    if (!row) return res.status(404).json({ message: "Team member not found" });
    return res.json({ ok: true, id: row.id });
  } catch (err) {
    logger.error({ err }, "Failed to delete team member");
    return res.status(500).json({ message: "Failed to delete team member" });
  }
});

export default router;
