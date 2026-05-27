/** React 18 DOM uses lowercase `fetchpriority` (not fetchPriority). */
export function imgFetchPriority(
  priority?: "high" | "low" | "auto"
): { fetchpriority?: "high" | "low" | "auto" } {
  return priority ? { fetchpriority: priority } : {};
}
