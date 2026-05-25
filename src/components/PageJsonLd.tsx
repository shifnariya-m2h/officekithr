import { Helmet } from "react-helmet-async";
import { buildPageGraph } from "@/seo/schema";

type PageJsonLdProps = {
  nodes: Record<string, unknown>[];
};

/** Page-specific JSON-LD (article, breadcrumb, FAQ) — avoids duplicating Organization/WebSite. */
export function PageJsonLd({ nodes }: PageJsonLdProps) {
  const graph = nodes.filter(Boolean);
  if (!graph.length) return null;
  return (
    <Helmet>
      <script type="application/ld+json">{buildPageGraph(graph)}</script>
    </Helmet>
  );
}
