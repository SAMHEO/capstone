import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import Apartment from "./Apartment/Apartment";
import About from "./About/About";
import history from './history';
import Profile from './Profile/Profile'
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Forget from './Forget/Forget';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Apartment" exact component={Apartment} />
                    <Route path="/About" component={About} />
                    <Route path="/Profile" component={Profile} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Signup" component={Signup} />
                    <Route path="/Forget" component={Forget} />
                </Switch>
            </Router>
        )
    }
}
