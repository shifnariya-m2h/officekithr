import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { MotionProvider } from "@/lib/performance/motion";
import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <HelmetProvider>
    <MotionProvider>
      <App />
    </MotionProvider>
  </HelmetProvider>
);

requestAnimationFrame(() => {
  document
    .querySelector(".hero-lcp-placeholder")
    ?.classList.add("is-hidden");
});
