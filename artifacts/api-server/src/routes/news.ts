import { Router, type IRouter } from "express";
import { desc, eq } from "drizzle-orm";
import { db, newsItemsTable } from "@workspace/db";
import { CreateNewsBody, UpdateNewsBody } from "@workspace/api-zod";
import { requireAdmin } from "../middlewares/admin-auth";
import { formatZodError } from "../lib/zod-error";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.get("/news", async (_req, res) => {
  try {
    const rows = await db
      .select()
      .from(newsItemsTable)
      .orderBy(desc(newsItemsTable.publishedAt));
    return res.json(rows);
  } catch (err) {
    logger.error({ err }, "Failed to list news items");
    return res.status(500).json({ message: "Failed to list news items" });
  }
});

router.post("/news", requireAdmin, async (req, res) => {
  const parsed = CreateNewsBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: formatZodError(parsed.error) });
  }
  try {
    const { publishedAt, ...rest } = parsed.data;
    const [row] = await db
      .insert(newsItemsTable)
      .values({
        ...rest,
        ...(publishedAt ? { publishedAt: new Date(publishedAt) } : {}),
      })
      .returning();
    return res.status(201).json(row);
  } catch (err) {
    logger.error({ err }, "Failed to create news item");
    return res.status(500).json({ message: "Failed to create news item" });
  }
});

router.put("/news/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: "Invalid id" });
  }
  const parsed = UpdateNewsBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: formatZodError(parsed.error) });
  }
  try {
    const { publishedAt, ...rest } = parsed.data;
    const [row] = await db
      .update(newsItemsTable)
      .set({
        ...rest,
        ...(publishedAt ? { publishedAt: new Date(publishedAt) } : {}),
      })
      .where(eq(newsItemsTable.id, id))
      .returning();
    if (!row) return res.status(404).json({ message: "News item not found" });
    return res.json(row);
  } catch (err) {
    logger.error({ err }, "Failed to update news item");
    return res.status(500).json({ message: "Failed to update news item" });
  }
});

router.delete("/news/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: "Invalid id" });
  }
  try {
    const [row] = await db
      .delete(newsItemsTable)
      .where(eq(newsItemsTable.id, id))
      .returning({ id: newsItemsTable.id });
    if (!row) return res.status(404).json({ message: "News item not found" });
    return res.json({ ok: true, id: row.id });
  } catch (err) {
    logger.error({ err }, "Failed to delete news item");
    return res.status(500).json({ message: "Failed to delete news item" });
  }
});

export default router;
