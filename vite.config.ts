import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import myCustomPlugin from "./plugins/my-first-custom-plugin";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), myCustomPlugin(), splitVendorChunkPlugin()],
	build: {
		target: "esnext",
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				another: resolve(__dirname, "another-route/index.html"),
			},
		},
	},
});
