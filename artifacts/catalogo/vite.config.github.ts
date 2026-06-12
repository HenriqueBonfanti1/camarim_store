import { defineConfig } from "vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Substitua "camarim-store" pelo nome do seu repositório no GitHub
const repoName = "camarim-store";

export default defineConfig({
  base: `/${repoName}/`,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  plugins: [
    runtimeErrorOverlay(),
  ],
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    assetsDir: "assets",
  },
  publicDir: "public",
});
