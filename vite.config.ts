import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        addEventListener: `@import "./src/assets/styles/index.scss"`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
});
