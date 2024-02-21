import { Fragment } from "preact";
import { Router, Route } from "preact-router";

import { Home } from "./Home/Home";
import { Members } from "./Members/Members";
import { Timer } from "./Timer/Timer";

export const PageRouter = () => {
	return (
		<Fragment>
			<Router>
				<Route path="/" component={Home} />
				<Route path="/members" component={Members} />
				<Route path="/timer" component={Timer} />
			</Router>
		</Fragment>
	);
};
