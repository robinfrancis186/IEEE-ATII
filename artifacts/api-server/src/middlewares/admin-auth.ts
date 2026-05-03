import type { Request, Response, NextFunction } from "express";

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const adminToken = process.env["ADMIN_TOKEN"];

  if (!adminToken) {
    return res.status(503).json({
      message:
        "Admin endpoints are disabled because ADMIN_TOKEN is not configured on the server.",
    });
  }

  const header = req.headers.authorization ?? "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  const token = match?.[1]?.trim();

  if (!token || token !== adminToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return next();
}
