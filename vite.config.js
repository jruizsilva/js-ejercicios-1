import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig(({ command }) => ({
  base: "/js-ejercicios-1/",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        ejercicio1: resolve(__dirname, "ejercicio1.html"),
        ejercicio2: resolve(__dirname, "ejercicio2.html"),
      },
    },
  },
}));
