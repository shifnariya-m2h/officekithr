 
export const extractExcerpt = (html: string, maxChars = 150): string => {
  if (!html) return "";

  // Strip all HTML tags
  const text = html.replace(/<[^>]*>/g, " ");
  
  // Normalize whitespace
  const clean = text.replace(/\s+/g, " ").trim();

  if (clean.length <= maxChars) return clean;

  // Cut at last space before maxChars
  const slice = clean.slice(0, maxChars);
  const lastSpace = slice.lastIndexOf(" ");
  const cutPoint = lastSpace > 20 ? lastSpace : maxChars;

  return clean.slice(0, cutPoint).trim() + "...";
};