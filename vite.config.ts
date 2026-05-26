import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/** Load built CSS asynchronously so it does not block first paint. */
function asyncCssPlugin(): Plugin {
  return {
    name: "async-css",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html.replace(
          /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
          (_match, href) =>
            `<link rel="preload" href="${href}" as="style" crossorigin onload="this.onload=null;this.rel='stylesheet'">` +
            `<noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`
        );
      },
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8085,
  },
  plugins: [react(), asyncCssPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Single animation runtime — avoids duplicate motion + framer-motion chunks.
      "motion/react": "framer-motion",
    },
    dedupe: ["react", "react-dom", "framer-motion"],
  },
  build: {
    target: "es2018",
    cssCodeSplit: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (
            id.includes("framer-motion") ||
            id.includes("motion/") ||
            id.includes("motion-dom")
          ) {
            return "motion-vendor";
          }
          if (id.includes("gsap")) return "gsap-vendor";
          if (id.includes("lottie")) return "lottie-vendor";
          if (id.includes("axios")) return "http-vendor";
          if (
            id.includes("react-dom") ||
            id.includes("react-router") ||
            /[/\\]react[/\\]/.test(id)
          ) {
            return "react-vendor";
          }
          if (id.includes("@radix-ui")) return "ui-vendor";
          if (id.includes("recharts") || id.includes("d3-")) {
            return "charts-vendor";
          }
          if (
            id.includes("lucide-react") ||
            id.includes("@tabler/icons") ||
            id.includes("react-icons")
          ) {
            return "icons-vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
    /** Hidden maps: debuggable in Lighthouse/Sentry without exposing //# sourceMappingURL */
    sourcemap: "hidden",
    modulePreload: {
      polyfill: false,
      resolveDependencies: (_filename, deps) =>
        deps.filter(
          (dep) =>
            !/lottie-vendor|motion-vendor|gsap-vendor|charts-vendor/.test(dep)
        ),
    },
    cssMinify: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
