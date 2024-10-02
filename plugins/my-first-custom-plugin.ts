export default function myCustomPlugin() {
	return {
		name: "my-first-custom-plugin",
		transform(src, id) {
			console.log({ src, id });
			if (id.substring(id.length - 4) === ".svg") {
				console.log(`SVG file found: ${id}`);
			}
		},
	};
}
