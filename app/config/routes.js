import React from "react";
import {Route,IndexRoute} from "react-router";
import Main from "../components/Main";
import Home from "../components/Home";

// var Route = ReactRouter.Route;

module.exports = (
 <Route path="/"   component = {Main}  >
        


        <IndexRoute component={Home}/>
 </Route>
)
