import vinext from "vinext";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/share/fonts/",
  plugins: [vinext()],
});
