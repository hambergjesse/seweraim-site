import { Fragment } from "preact";
import { Router, Route } from "preact-router";

import { Home } from "./Home/Home";
import { Members } from "./Members/Members";

export const PageRouter = () => {
	return (
		<Fragment>
			<Router>
				<Route path="/" component={Home} />
				<Route path="/members" component={Members} />
			</Router>
		</Fragment>
	);
};
