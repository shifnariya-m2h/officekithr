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

function hideHeroLcpPlaceholder(): void {
  document
    .querySelector<HTMLElement>(".hero-lcp-placeholder")
    ?.classList.add("is-hidden");
}

// Drop static LCP skeleton after first paint — lightweight, no MutationObserver.
requestAnimationFrame(() => {
  window.setTimeout(hideHeroLcpPlaceholder, 120);
});
