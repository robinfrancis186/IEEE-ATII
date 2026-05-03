type ZodIssueLike = { path: (string | number)[]; message: string };
type ZodErrorLike = { issues: ZodIssueLike[] };

export function formatZodError(error: ZodErrorLike): string {
  return error.issues
    .map((issue) => `${issue.path.join(".") || "body"}: ${issue.message}`)
    .join("; ");
}
