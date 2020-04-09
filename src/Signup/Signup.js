import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./Signup.css";

class Signup extends Component {
  render() {
    return (
      <div style={{ justifyContent: "center", padding: 30 }}>
        <div style={{ clear: "both", margin: "25px" }} align="center">
          <h2>Sign Up Page</h2>
        </div>
        <div class="form-group" align="center">
          <input
            type="text"
            class="signup-box"
            id="username-signup-box"
            placeholder="Username / Email Adddress"
          ></input>
        </div>
        <div class="form-group" align="center">
          <input
            type="password"
            class="signup-box"
            id="password-signup-box"
            placeholder="Password"
          ></input>
        </div>
        <div class="form-group" align="center">
          <input
            type="password"
            class="signup-box"
            id="password-signup-confirm-box"
            placeholder="Re-enter Your Password"
          ></input>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-success btn-default center"
            id="Signup-button"
          >
            <span class="glyphicon glyphicon-off"></span> Sign Up{" "}
          </button>
        </div>
        <div class="center" style={{ width: "30%" }}>
          <Nav.Link href="/Login">Already have an account? Login</Nav.Link>
        </div>
      </div>
    );
  }
}

export default Signup;
