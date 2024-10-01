# first-vite-project

Learning more about Vite

## Vite Resources

    # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
	languageOptions: {
		// other options...
		parserOptions: {
			project: ["./tsconfig.node.json", "./tsconfig.app.json"],
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
	// Set the react version
	settings: { react: { version: "18.3" } },
	plugins: {
		// Add the react plugin
		react,
	},
	rules: {
		// other rules...
		// Enable its recommended rules
		...react.configs.recommended.rules,
		...react.configs["jsx-runtime"].rules,
	},
});
```

## Resources

[Udemy Course](https://www.udemy.com/course/vite-developers-guide)

# Design Patterns

### Introduction Section 1

- What is Vite?
  - The word for vite in French is fast.
  - Created by Even You in June 2020 also created Vue.js
  - Vite was alternative from Webpack among others
  - Faster because it uses native ES modules are standardized format for sharing JS code.
- Vite VS Webpack
  - Primary bundlers to turn large set of js files into smaller production files
  - Vite focuses on faster dev builds by focusing on only bundling the necessary parts of the code during development relying on native es modules
  - Vite is faster in development
  - Webpack has faster production bundle
  - With code splitting they are about the same speed on production

### Getting Started Section 2

- pnpm create (alias for init)
  - Running `pnpm create vite@latest`
  - Bundlers
    - babel
    - SWC - new one faster
- New project overview
  - Config files
    - `vite.config.ts` - Configure vite
    - `tsconfig.json` - For when we compile our vite application
    - `tsconfig.node.json` - Main compile options imports `tsconfig.json`
  - Application files
    - Basic React setup
    - public directory - files that get copied to build output
    - src directory - Next video
- Framework Support
  - VueJS
  - React
  - Svelte
