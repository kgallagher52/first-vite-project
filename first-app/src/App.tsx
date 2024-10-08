import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import moduleOne from "./one.module.css";
import moduleTwo from "./two.module.css";
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
							key={src.default}
							src={src.default}
							alt="logo"
						/>
					);
				})}
			</div>
			<h1 className={moduleOne.highlight}>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p className={moduleTwo.highlight}>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
			<a href="/another-route/">Another Route</a>
		</>
	);
}

export default App;
