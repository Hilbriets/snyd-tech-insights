import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],

  // IMPORTANT: custom domain on GitHub Pages
  base: "/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
