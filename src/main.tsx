import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Hide the static LCP skeleton only after the React hero image has painted, so
// the user never sees a gap between the two and the LCP candidate stays stable.
function hideHeroLcpPlaceholder(): void {
  const placeholder = document.querySelector<HTMLElement>(
    ".hero-lcp-placeholder"
  );
  if (!placeholder || placeholder.classList.contains("is-hidden")) return;
  placeholder.classList.add("is-hidden");
}

function waitForReactHero(): void {
  // The React-rendered LCP image lives inside #main-content and uses the same
  // dashboardok-*.webp src. Once it is mounted and decoded we can drop the
  // static skeleton.
  const ready = () => {
    const heroImg = document.querySelector<HTMLImageElement>(
      'main img[src*="dashboardok"], main img[src*="mobile-mockup"]'
    );
    if (!heroImg) return false;
    if (heroImg.complete && heroImg.naturalWidth > 0) {
      hideHeroLcpPlaceholder();
      return true;
    }
    heroImg.addEventListener("load", hideHeroLcpPlaceholder, { once: true });
    heroImg.addEventListener("error", hideHeroLcpPlaceholder, { once: true });
    return true;
  };

  if (ready()) return;

  const observer = new MutationObserver(() => {
    if (ready()) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Hard fallback so the placeholder never sticks around if something breaks.
  window.setTimeout(() => {
    observer.disconnect();
    hideHeroLcpPlaceholder();
  }, 4000);
}

if (document.readyState === "complete") {
  waitForReactHero();
} else {
  requestAnimationFrame(waitForReactHero);
}
