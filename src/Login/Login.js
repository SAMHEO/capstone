import React, { Component } from "react";
import { Nav, Container } from "react-bootstrap";
import "./Login.css";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      email: "",
      password: "",
      isLogin: null,
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  login = (e) => {
    e.preventDefault();

    const login_info = {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("api/account/login", login_info)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
        if (json.success === true) {
          alert("Logged in");
          window.localStorage.setItem("userInfo", JSON.stringify(json));
          this.setState({
            id: json.idx,
            email: json.email,
            isLogin: json.success,
          });
          // console.log(this.props);
          window.sessionStorage.setItem("email", this.state.email);
          this.props.onLogin();
          this.props.history.push("/");
        } else {
          alert("Check your email or password");
        }
      });
  };

  render() {
    return (
      <Container id="login-container" className="mt-5">
        <div className="login-canvas">
          <Col sm={12} lg={6} align="center">
            <div>
              <h2>Login</h2>
            </div>
            <form onSubmit={this.login} className="login-form">
              <input
                type="email"
                className="form-control"
                onChange={this.handleEmailChange}
                id="username-input-box"
                placeholder="Email Adddress"
                required
                autoFocus
              />
              <br />
              <input
                type="password"
                className="form-control"
                onChange={this.handlePasswordChange}
                id="password-input-box"
                placeholder="Password"
                required
              />
              <button
                type="submit"
                className="btn btn-success center"
                id="login-button"
              >
                Login
              </button>
            </form>
            <div className="center">
              <Nav.Link href="/signup">Register</Nav.Link>
              <Nav.Link href="/forget">Forget your password?</Nav.Link>
            </div>
          </Col>
          <Col sm={0} lg={6} className="login-image ">
            <div align="center">
              <img src="logo.png" id="main-logo-loginpage" />
            </div>
          </Col>
        </div>
        {/* <div align="center" className="login-wrapper">
          <div align="center">
          <img
          src="logo.png"
          id="main-logo-loginpage"
          />
          </div>
          <div style={{ clear: "both", margin: "25px" }} align="center">
          <h2>Login</h2>
          </div>
          <form onSubmit={this.login} className="login-form">
            <input
              type="email"
              className="form-control"
              onChange={this.handleEmailChange}
              id="username-input-box"
              placeholder="Email Adddress"
              required
              autoFocus
            />
            <br />
            <input
              type="password"
              className="form-control"
              onChange={this.handlePasswordChange}
              id="password-input-box"
              placeholder="Password"
              required
            />
            <br />
            <button
              type="submit"
              className="btn btn-success center"
              id="login-button"
            >
              Login
            </button>
          </form>
          <div className="center">
            <Nav.Link href="/signup">Don't have an account? Sign Up</Nav.Link>
            <Nav.Link href="/forget">Forget your password?</Nav.Link>
          </div>
        </div> */}
      </Container>
    );
  }
}

export default withRouter(Login);
