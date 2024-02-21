import { PageRouter } from "./components/Router";
import AnimatedCursor from "react-animated-cursor";

export const App = () => {
	return (
		<main className="app__wrapper">
			<PageRouter />
			<AnimatedCursor
				innerSize={8}
				outerSize={8}
				color="246, 206, 36"
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={5}
				clickables={[
					"a",
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					"label[for]",
					"select",
					"textarea",
					"button",
					".link",
				]}
			/>
		</main>
	);
};
