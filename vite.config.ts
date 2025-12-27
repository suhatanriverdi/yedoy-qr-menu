import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/yedoy-qr-menu/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
