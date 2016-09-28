import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router";
import routes from "./config/routes";

// var Router = ReactRouter.Router;

ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById("app")
)