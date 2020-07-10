

import "@/globals/index.less";

import React from "react";
import dva, { router } from "dva";

import BasicLayout from "@/layouts/BasicLayout";
import HomePage from "@/pages/HomePage";

const { Router, Route } = router;

const app = dva({
	onError: (error) => (error)
});

app.model({
	namespace: "TestPage",
	state: { a: 1 }
});

app.router(({ history }) => (
	<Router history={history}>
		<BasicLayout>
			<Route path="/" component={HomePage} />
		</BasicLayout>
	</Router>
));

app.start("#root");
