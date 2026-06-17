/** True when the client should render full content immediately (bots, prerender). */
export function shouldRenderForCrawler(): boolean {
  if (typeof window === "undefined") return true;
  if (navigator.webdriver) return true;
  const ua = navigator.userAgent;
  return /bot|crawl|spider|slurp|facebookexternalhit|linkedinbot|embedly|quora link preview|whatsapp|preview/i.test(
    ua
  );
}
