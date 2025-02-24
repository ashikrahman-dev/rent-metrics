import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        react({
            babel: {
                parserOpts: {
                    plugins: ["decorators-legacy", "classProperties"],
                },
            },
        }),
        nodePolyfills(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        chunkSizeWarningLimit: 1000, // in kB
        rollupOptions: {
            onwarn(warning, warn) {
                if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
                    return;
                }
                warn(warning);
            },
        },
    },
});

// import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";
// import { defineConfig } from "vite";

// // https://vite.dev/config/
// export default defineConfig({
//     plugins: [tailwindcss(), react()],
// });
