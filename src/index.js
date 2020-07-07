

import "@/globals/index.less";
import dva from "dva";
import React from "react";

import BasicLayout from "@/layouts/BasicLayout";
import HomePage from "@/pages/HomePage";
import TestPage from "@/pages/TestPage";

const app = dva();
app.model({
	namespace: "TestPage",
	state: { a: 1 }
});
app.router(() => (
	<BasicLayout>
		<HomePage />
		<TestPage />
	</BasicLayout>
));
app.start("#root");
