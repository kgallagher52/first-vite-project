import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
/* Supports async functions */
export default defineConfig({
	plugins: [react()],
	build: {
		target: "esnext",
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				nested: resolve(__dirname, "another-route/index.html"),
			},
		},
	},
});
