/** Curated blog card images — local assets first, then distinct Unsplash fallbacks. */
export const BLOG_CARD_IMAGES = [
  "/TimePayroll-min.webp",
  "/HiringOnboardings.webp",
  "/Performance-selfservice-min.webp",
  "/payroll-comp.webp",
  "/recruitment-onboarding.webp",
  "/facescans02.webp",
  "/Ai-pilot-chatbot.webp",
  "/mobile-mockup.webp",
  "/dashboardok.webp",
  "/perfo-growth.webp",
  "/corehr.webp",
  "/operation-support.webp",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  "/chatbot.webp",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
  "/ImageThumbnail2.webp",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop",
  "/Frame.webp",
] as const;

/** Fallback when a card image fails to load. */
export const BLOG_CARD_IMAGE_FALLBACK = "/dashboardok.webp";

/** Stable image per slug — same card always gets the same thumbnail. */
export function blogImageForSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return BLOG_CARD_IMAGES[hash % BLOG_CARD_IMAGES.length];
}
