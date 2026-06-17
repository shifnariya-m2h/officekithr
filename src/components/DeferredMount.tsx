import { ReactNode, useEffect, useState } from "react";
import { shouldRenderForCrawler } from "@/lib/is-crawler";

type DeferredMountProps = {
  children: ReactNode;
  /** Placeholder height to limit layout shift before mount. */
  minHeight?: string;
  /** Max ms before forcing mount (keeps prerender/crawlers seeing full content). */
  maxWait?: number;
  className?: string;
};

/**
 * Defers mounting heavy below-fold UI until the browser is idle.
 * Hard timeout ensures prerender and bots still receive full HTML.
 */
export function DeferredMount({
  children,
  minHeight = "1px",
  maxWait = 1200,
  className,
}: DeferredMountProps) {
  const [ready, setReady] = useState(shouldRenderForCrawler);

  useEffect(() => {
    let cancelled = false;
    const mount = () => {
      if (!cancelled) setReady(true);
    };

    const timeoutId = window.setTimeout(mount, maxWait);

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(mount, { timeout: maxWait });
      return () => {
        cancelled = true;
        window.clearTimeout(timeoutId);
        window.cancelIdleCallback(idleId);
      };
    }

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [maxWait]);

  if (!ready) {
    return (
      <div
        className={className}
        style={{ minHeight }}
        aria-hidden
        data-deferred-placeholder
      />
    );
  }

  return <>{children}</>;
}
