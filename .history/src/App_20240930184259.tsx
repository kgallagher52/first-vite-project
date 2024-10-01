import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// Dynamic imports top level await not supported in every web browser
const logoName = "wing2";
const module = (await import(`./png-images/${logoName}.png`)) as { default: string };

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<img
					src={module.default}
					alt=""
				/>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
			<a href="/another-route/">Another Route</a>
		</>
	);
}

export default App;
