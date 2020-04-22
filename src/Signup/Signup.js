import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./Signup.css";

class Signup extends Component {
  //connecting to db
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repassword: "",
      birthday: "",
      sex: "",
      phone: "",
      image: null,
      confirmPassword: false,
    };
  }
  handleFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  };
  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  handelRePasswordChange = (e) => {
    this.setState({ repassword: e.target.value });
  };

  doesPasswordMatch() {
    const { password, repassword } = this.state;
    return password === repassword;
  }

  confirmPasswordClassName() {
    const { repassword } = this.state;

    if (repassword) {
      return this.doesPasswordMatch() ? "is-valid" : "is-invalid";
    }
  }
  renderFeedbackMessage() {
    const { repassword } = this.state;
    if (repassword) {
      if (!this.doesPasswordMatch()) {
        return <div className="invalid-feedback">Password does not match.</div>;
      }
    }
  }
  signup = (e) => {
    e.preventDefault();
    if (this.doesPasswordMatch()) {
      const signup_info = {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch("api/account/signup", signup_info)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log(json);
          if (json.success === true) {
            window.localStorage.setItem("userInfo", JSON.stringify(json));
            this.setState({
              id: json.idx,
              email: json.email,
              password: json.password,
            });
            this.props.history.push("/login");
          } else if (json.code === 3) {
            alert("The emails is already exists");
          }
        });
    }
  };
  render() {
    return (
      <Container className="mt-5">
        <div align="center">
          <img src="logo.png" id="main-logo-loginpage" alt="logo" />
        </div>
        <div align="center" className="signup-wrapper">
          <div style={{ clear: "both", margin: "25px" }} align="center">
            <h2>Sign Up</h2>
          </div>
          <form className="signup-form" onSubmit={this.signup}>
            <input
              type="text"
              className="form-control"
              onChange={this.handleFirstNameChange}
              id="username-signup-box"
              placeholder="First Name"
              required
              autoFocus
            />
            <br />
            <input
              type="text"
              className="form-control"
              onChange={this.handleLastNameChange}
              id="username-signup-box"
              placeholder="Last Name"
              required
            />
            <br />
            <input
              type="email"
              className="form-control"
              onChange={this.handleEmailChange}
              id="username-signup-box"
              placeholder="Email Adddress"
              required
            />
            <br />
            <input
              type="password"
              className="form-control"
              onChange={this.handlePasswordChange}
              id="password-signup-box"
              placeholder="Password"
              required
            />
            <br />
            <input
              type="password"
              className={`form-control ${this.confirmPasswordClassName()} `}
              onChange={this.handelRePasswordChange}
              id="password-signup-confirm-box"
              placeholder="Re-enter Your Password"
              required
            />
            {this.renderFeedbackMessage()}
            <br />
            <button
              type="submit"
              className="btn btn-success center"
              id="Signup-button"
            >
              Sign Up
            </button>
          </form>
          <div className="center" style={{ width: "30%", minWidth: "265px" }}>
            <Nav.Link href="/Login">Already have an account? Login</Nav.Link>
          </div>
        </div>
      </Container>
    );
  }
}

export default Signup;
