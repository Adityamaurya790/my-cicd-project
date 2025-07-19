import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my-cicd-project/", // 👈 important for GitHub Pages
  plugins: [react()],
});
