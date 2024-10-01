# first-vite-project

Learning more about Vite

## Important

- Vite uses Rollup as the bundling tool

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
  - Created by Evan You in June 2020 also created Vue.js
  - Vite was alternative from Webpack among others
  - Its a bundler making all js or ts files into small files
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

### Developing with Vite Section 3

- Using static assets
  - two ways to include static files
    1. public directory
    2. Importing an asset during your application will also include when built
  - Tree Shaking
    - Removal of dead code and vite uses it when you run a build so If I imported an asset before in a component and then got rid of it next build that wont be included
- Creating Multiple Routes
  - Vite uses rollup underneath the hood
  - Can pass in the vite.config.ts the rollupOptions inputs set new entry points (only needed for production build)
- Dynamic Imports

  - by adding target esnext to build in vite.config.ts we tell it to use modern web browsers

  - Example of using a Top Level Await import (not supported by all browsers)

  ```jsx
  // Dynamic imports top level await not supported in every web browser as is because we know that it is a string
  const logoName = "wing1";
  const module = (await import(`./png-images/${logoName}.png`)) as { default: string };
    // html
    return {
      <div>
        <img src={module.default} alt="" />
      </div>
    }
  ```

  - Example of using a Blob pattern imports

  ```jsx
      // Dynamic imports glob pattern by default lazy loads the images but you can add {eager: true} after the path to not lazy load them
    const modules = import.meta.glob<{ default: string }>("./png-images/*.png", { eager: true });
    function App() {
      const [count, setCount] = useState(0);

      return (
        <>
          <div>
            {Object.values(modules).map((src) => {
              return (
                <img
                  src={src.default}
                  alt="logo"
                />
              );
            })}
          </div>
  ```

### Styling Your Vite Application Section 4

- css modules
  - Separate modules so don't have general css this is done by vite creating unique names to classes or ids in css files
- css variables

```css
/* Declaring this in the App.css under #root will make this variable avaiable to all css modules */
#root {
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;
	text-align: center;
	--my-variable: #61dafb;
}
/* Basic example of using these variables */
.highlight {
	color: green;
}

.selector {
	--my-color: blue;

	color: var(--my-color);
}
```

### Publishing Your Vite Application Section 5

### Advanced Features Section 6
