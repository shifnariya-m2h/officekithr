import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

/** Sticky demo CTA — desktop bar + mobile bottom bar. */
export function StickyDemoCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const onCtaClick = () => trackEvent("sticky_cta_click", { placement: "sticky_bar" });

  return (
    <>
      <div
        className="hidden md:flex fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 py-3 px-4 justify-center gap-4 items-center shadow-lg"
        role="region"
        aria-label="Book a demo"
      >
        <p className="text-sm text-muted-foreground">
          See OfficeKit HR for your team — India & GCC payroll in one platform.
        </p>
        <Button asChild onClick={onCtaClick}>
          <Link to="/contact">
            Book free demo
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </div>

      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/95 backdrop-blur border-t shadow-lg safe-area-pb"
        role="region"
        aria-label="Book a demo"
      >
        <Button asChild className="w-full" size="lg" onClick={onCtaClick}>
          <Link to="/contact">Book free demo</Link>
        </Button>
      </div>
    </>
  );
}
