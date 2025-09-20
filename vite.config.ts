import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    svgr(),
    visualizer({
      filename: "stats.html",
      template: "treemap", // or 'sunburst', 'network'
      gzipSize: true,
      brotliSize: true,
    }),
  ],
});
