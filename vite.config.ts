import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const commonOptions = {
    plugins: [react()],
  };

  const developmentOptions = {
    build: {
      minify: false,
    },
  };

  const productionOptions = {
    build: {
      minify: true,
    },
  };

  return command === "build"
    ? { ...commonOptions, ...productionOptions }
    : { ...commonOptions, ...developmentOptions };
});
