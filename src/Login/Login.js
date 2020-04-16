import React, { Component } from "react";
import { Nav, Container } from "react-bootstrap";
import "./Login.css";
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
    fetch("api/login", login_info)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
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
      <Container className="mt-5">
        {/* <Row>
          <Col lg="8"> */}
        <div style={{ justifyContent: "center", padding: 30 }}>
          <div style={{ clear: "both", margin: "25px" }} align="center">
            <h2>Login Page</h2>
          </div>
          <form onsubmit={this.login}>
            <div class="form-group" align="center">
              <input
                type="email"
                class="login-box"
                onChange={this.handleEmailChange}
                id="username-input-box"
                placeholder="Username / Email Adddress"
                required
                autofocus
              ></input>
            </div>
            <div class="form-group" align="center">
              <input
                type="password"
                class="login-box"
                onChange={this.handlePasswordChange}
                id="password-input-box"
                placeholder="Password"
                required
              ></input>
            </div>
            <div
              align="left"
              style={{ width: "28%", minWidth: "200px" }}
              class="center"
            >
              <td class="text-center">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="0"
                  id="remember-me"
                ></input>
              </td>
              <td class="text-center">Remember Me</td>
            </div>
            <div>
              <button
                type="submit"
                class="btn btn-success btn-default center"
                id="login-button"
                onClick={this.login}
              >
                <span class="glyphicon glyphicon-off"></span> Login{" "}
              </button>
            </div>
          </form>
          <div class="center" style={{ width: "30%", minWidth: "250px" }}>
            <Nav.Link href="/signup" style={{ minWidth: "300px" }}>
              Don't have an account? Sign Up
            </Nav.Link>
            <Nav.Link href="/forget" style={{ minWidth: "250px" }}>
              Forget your password?
            </Nav.Link>
          </div>
        </div>
        {/* </Col>
          <Col className="align-middle">
            <div>
              <img
                src="ExampleImage.png"
                className="d-block w-100 "
                alt="..."
              />
            </div>
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default withRouter(Login);
