import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      {
        find: "@components",
        replacement: "/src/components",
      },
      {
        find: "@pages",
        replacement: "/src/pages",
      },
      {
        find: "@routes",
        replacement: "/src/routes",
      },
      {
        find: "@utils",
        replacement: "/src/utils",
      },
      {
        find: "@hooks",
        replacement: "/src/hooks",
      },
      {
        find: "@contexts",
        replacement: "/src/contexts",
      },
      {
        find: "@config",
        replacement: "/src/config",
      },
      {
        find: "@api",
        replacement: "/src/api",
      },
    ],
  },
});
