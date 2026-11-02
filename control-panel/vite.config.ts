import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";

/* NOTE: added property resolve in line 10 , para agregar @ como root directory. Si hay problemas Borrar y eliminar libreria @types/node
Si es menor que TypeScript 5.8, elimina esa línea. */

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
});
