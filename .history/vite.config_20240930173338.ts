import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
/* Supports async functions */
export default defineConfig(({ command, mode }) => {
	if (mode === "development") {
		console.log(command, mode);
	}
	return {
		plugins: [react()],
	};
});
