import { Router, type IRouter } from "express";
import { asc, eq } from "drizzle-orm";
import { db, eventsTable } from "@workspace/db";
import { CreateEventBody, UpdateEventBody } from "@workspace/api-zod";
import { requireAdmin } from "../middlewares/admin-auth";
import { formatZodError } from "../lib/zod-error";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.get("/events", async (_req, res) => {
  try {
    const rows = await db
      .select()
      .from(eventsTable)
      .orderBy(asc(eventsTable.startsAt));
    return res.json(rows);
  } catch (err) {
    logger.error({ err }, "Failed to list events");
    return res.status(500).json({ message: "Failed to list events" });
  }
});

router.post("/events", requireAdmin, async (req, res) => {
  const parsed = CreateEventBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: formatZodError(parsed.error) });
  }
  try {
    const data = parsed.data;
    const [row] = await db
      .insert(eventsTable)
      .values({
        title: data.title,
        category: data.category,
        location: data.location,
        time: data.time,
        startsAt: new Date(data.startsAt),
        description: data.description ?? null,
        featured: data.featured ?? false,
        registrationUrl: data.registrationUrl ?? null,
      })
      .returning();
    return res.status(201).json(row);
  } catch (err) {
    logger.error({ err }, "Failed to create event");
    return res.status(500).json({ message: "Failed to create event" });
  }
});

router.put("/events/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: "Invalid id" });
  }
  const parsed = UpdateEventBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: formatZodError(parsed.error) });
  }
  try {
    const data = parsed.data;
    const [row] = await db
      .update(eventsTable)
      .set({
        title: data.title,
        category: data.category,
        location: data.location,
        time: data.time,
        startsAt: new Date(data.startsAt),
        description: data.description ?? null,
        featured: data.featured ?? false,
        registrationUrl: data.registrationUrl ?? null,
      })
      .where(eq(eventsTable.id, id))
      .returning();
    if (!row) return res.status(404).json({ message: "Event not found" });
    return res.json(row);
  } catch (err) {
    logger.error({ err }, "Failed to update event");
    return res.status(500).json({ message: "Failed to update event" });
  }
});

router.delete("/events/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: "Invalid id" });
  }
  try {
    const [row] = await db
      .delete(eventsTable)
      .where(eq(eventsTable.id, id))
      .returning({ id: eventsTable.id });
    if (!row) return res.status(404).json({ message: "Event not found" });
    return res.json({ ok: true, id: row.id });
  } catch (err) {
    logger.error({ err }, "Failed to delete event");
    return res.status(500).json({ message: "Failed to delete event" });
  }
});

export default router;
