/** Format YYYY-MM-DD without timezone shift (avoids off-by-one day bugs). */
export function formatBlogDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("T")[0].split("-").map(Number);
  if (!year || !month || !day) return isoDate;

  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
