import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./Signup.css";

class Signup extends Component {

  //connecting to db
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      email: "",
      password: "",
      repassword: "",
    };
  }
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  handelRePasswordChange = (e) =>{
    this.setState({ repassword: e.target.value });
  }

  signup = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.repassword) {
      const signup_info = {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch("api/signup", signup_info)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          //front end needs to check if the password and re-entered password is matching
          if (json.success === true) {
            alert("Successfully singed up");
            window.localStorage.setItem("userInfo", JSON.stringify(json));
            this.setState({
              id: json.idx,
              email: json.email,
              password: json.password,
            });
            this.props.history.push("/");
          }else {
            alert("The emails is already signed up");
          }
        });
    }
    else{
      alert("Password does not match")
    }
  };
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
            onChange={this.handleEmailChange}
            id="username-signup-box"
            placeholder="Username / Email Adddress"
          ></input>
        </div>
        <div class="form-group" align="center">
          <input
            type="password"
            class="signup-box"
            onChange={this.handlePasswordChange}
            id="password-signup-box"
            placeholder="Password"
          ></input>
        </div>
        <div class="form-group" align="center">
          <input
            type="password"
            class="signup-box"
            onChange={this.handelRePasswordChange}
            id="password-signup-confirm-box"
            placeholder="Re-enter Your Password"
          ></input>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-success btn-default center"
            id="Signup-button"
            onClick={this.signup}
          >
            <span class="glyphicon glyphicon-off"></span> Sign Up{" "}
          </button>
        </div>
        <div class="center" style={{ width: "30%", minWidth: "265px"}}>
          <Nav.Link href="/Login">Already have an account? Login</Nav.Link>
        </div>
      </div>
    );
  }
}

export default Signup;
