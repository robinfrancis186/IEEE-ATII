import { Router, type IRouter } from "express";
import { randomUUID } from "node:crypto";
import { SubmitContactBody } from "@workspace/api-zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.post("/contact", (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);

  if (!parsed.success) {
    const message = parsed.error.issues
      .map((i: { path: (string | number)[]; message: string }) =>
        `${i.path.join(".") || "body"}: ${i.message}`,
      )
      .join("; ");
    return res.status(400).json({ message });
  }

  const id = randomUUID();
  const { name, email, organization, subject, message } = parsed.data;

  logger.info(
    {
      contactSubmissionId: id,
      name,
      email,
      organization: organization ?? null,
      subject,
      messageLength: message.length,
    },
    "Received contact form submission",
  );

  return res.status(200).json({ ok: true, id });
});

export default router;
