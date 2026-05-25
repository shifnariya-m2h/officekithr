import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type BlogSeoEntry = {
  slug: string;
  path: string;
  title: string;
  description: string;
  headline: string;
  image?: string;
  datePublished?: string;
  author?: string;
};

export type SeoOverride = {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  robots?: string;
  type?: "website" | "article";
  noindex?: boolean;
  hreflang?: { lang: string; path: string }[];
};

type SeoContextValue = {
  override: SeoOverride | null;
  setOverride: (value: SeoOverride | null) => void;
  blogManifest: Record<string, BlogSeoEntry>;
  manifestReady: boolean;
};

const SeoContext = createContext<SeoContextValue | null>(null);

export function SeoProvider({ children }: { children: ReactNode }) {
  const [override, setOverride] = useState<SeoOverride | null>(null);
  const [blogManifest, setBlogManifest] = useState<Record<string, BlogSeoEntry>>({});
  const [manifestReady, setManifestReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/blog-seo-manifest.json", { cache: "force-cache" })
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Record<string, BlogSeoEntry>) => {
        if (!cancelled) {
          setBlogManifest(data ?? {});
          setManifestReady(true);
        }
      })
      .catch(() => {
        if (!cancelled) setManifestReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const setOverrideStable = useCallback((value: SeoOverride | null) => {
    setOverride(value);
  }, []);

  const value = useMemo(
    () => ({
      override,
      setOverride: setOverrideStable,
      blogManifest,
      manifestReady,
    }),
    [override, setOverrideStable, blogManifest, manifestReady]
  );

  return <SeoContext.Provider value={value}>{children}</SeoContext.Provider>;
}

export function useSeoContext() {
  const ctx = useContext(SeoContext);
  if (!ctx) {
    throw new Error("useSeoContext must be used within SeoProvider");
  }
  return ctx;
}

/** Register per-page SEO overrides (cleared on unmount). */
export function usePageSeo(config: SeoOverride | null) {
  const { setOverride } = useSeoContext();

  useEffect(() => {
    setOverride(config);
    return () => setOverride(null);
  }, [config, setOverride]);
}
