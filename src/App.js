import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./index.css";
import Landing from "./components/Landing";

export default function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route
					path="/sample"
					render={(routerProps) => (
						<Landing {...routerProps} sampleProp={"sample"} />
					)}
				/>
				<Route path="/something" component={Landing} />
				<Route path="/default" render={() => <Redirect to="/" />} />
				<Route component={Landing} />
			</Switch>
		</div>
	);
}
