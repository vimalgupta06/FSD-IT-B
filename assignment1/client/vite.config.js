import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    proxy: {
      "/write": "http://localhost:4000",
      "/read": "http://localhost:4000"
    }
  }
});
