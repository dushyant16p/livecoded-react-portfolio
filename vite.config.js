import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config - tells Vite to use the React plugin
export default defineConfig({
  plugins: [react()],
  // "base" is the folder the site is served from on GitHub Pages.
  // Our live demo lives at dushyant16p.github.io/livecoded-react-portfolio/
  // If you fork this repo with a different name, change this value to "/your-repo-name/".
  base: "/livecoded-react-portfolio/",
});
