import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import Apartment from "./Apartment/Apartment";
import Roommate from "./Roommates/Roommate";
import About from "./About/About";
import history from "./history";
import Profile from "./Profile/Profile";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Forget from "./Forget/Forget";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/apartment" exact component={Apartment} />
          <Route path="/roommate" exact component={Roommate} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forget" component={Forget} />
        </Switch>
      </Router>
    );
  }
}
