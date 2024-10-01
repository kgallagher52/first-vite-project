import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:fs";

// https://vitejs.dev/config/
/* Supports async functions */
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				nested: resolve(__dirname, "index.html"),
			},
		},
	},
});
