import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Mobile-first sticky demo CTA after scroll — boosts homepage & landing conversions. */
export function StickyDemoCta() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  const hiddenOn = ["/contact", "/pricing"];
  const shouldHide = hiddenOn.includes(pathname);

  useEffect(() => {
    if (shouldHide) {
      setVisible(false);
      return;
    }

    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [shouldHide]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur-md p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden shadow-[0_-8px_24px_rgba(0,0,0,0.08)]"
      role="region"
      aria-label="Book a demo"
    >
      <div className="flex gap-2 max-w-lg mx-auto">
        <Button asChild variant="outline" className="flex-1 h-11 rounded-full">
          <Link to="/pricing">See pricing</Link>
        </Button>
        <Button
          asChild
          className="flex-[1.4] h-11 rounded-full bg-[#0055ff] hover:bg-[#0044cc]"
        >
          <Link to="/contact">
            Book demo
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
