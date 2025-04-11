import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Convert file URL to directory path (for ESM compatibility)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()], // Enable React support
  server: {
    host: "localhost", // Serve on localhost
    port: 5173, // Default Vite port
    open: true, // Automatically open the app in the browser
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for the src directory
    },
  },
  build: {
    outDir: "dist", // Output directory for the production build
    emptyOutDir: true, // Clear the output directory before building
  },
});