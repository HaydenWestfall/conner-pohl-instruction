import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";
import { seoStatic } from "./plugins/seoStatic";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Social URLs feed the JSON-LD `sameAs` list, which the SEO plugin bakes into
  // static HTML at build time — so they have to be read here, not via
  // import.meta.env (which only exists inside the bundle).
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    base: "/",
    plugins: [
      react(),
      svgr(),
      seoStatic(env),
      visualizer({
        filename: "stats.html",
        template: "treemap", // or 'sunburst', 'network'
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    build: {
      // Animation libraries are large and change far less often than app code.
      // Splitting them keeps them cached across deploys instead of forcing a
      // full re-download every time a component changes.
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom", "react-router-dom"],
            gsap: ["gsap", "@gsap/react"],
            motion: ["framer-motion"],
          },
        },
      },
    },
  };
});
