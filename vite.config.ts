import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8085,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
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
    sourcemap: false,
    modulePreload: { polyfill: false },
    cssMinify: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
