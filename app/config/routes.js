import React from "react";
import {Route,IndexRoute} from "react-router";
import Main from "../components/Main";
import Home from "../components/Home";
import Profile from "../components/Profile";
// var Route = ReactRouter.Route;

module.exports = (
 <Route path="/"   component = {Main}  >
        <Route path = "profile/:username" component = {Profile}/>
        <IndexRoute component={Home}/>
 </Route>
)
