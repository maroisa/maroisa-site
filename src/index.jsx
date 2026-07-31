/* @refresh reload */
import { render } from "solid-js/web";
import "solid-devtools";

import "./index.css";
import App from "./pages/App";
import { Route, Router } from "@solidjs/router";
import Layout from "./components/Layout";
import Project from "./pages/Project";
import About from "./pages/About";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
    );
}

render(
    () => (
        <Router root={Layout}>
            <Route component={App} path={"/"} />
            <Route component={Project} path={"/project"} />
            <Route component={About} path={"/about"} />
        </Router>
    ),
    root,
);
