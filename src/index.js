

import "@/globals/index.less";

import React from "react";
import {createBrowserHistory} from "history";
import dva, { router } from "dva";

import BasicLayout from "@/layouts/BasicLayout";
import HomePage from "@/pages/HomePage";
import TestPage from "@/pages/TestPage";

const { BrowserRouter, Route } = router;


const app = dva({
	history:createBrowserHistory(),
	onError: (error) => (error)
});

app.model({
	namespace: "TestPage",
	state: { a: 1 }
});

app.router(({ history }) => (
	<BrowserRouter history={history}>
		<BasicLayout>
			<Route path="/" component={HomePage} />
			<Route path="/test" component={TestPage}/>
		</BasicLayout>
	</BrowserRouter>
));

app.start("#root");
