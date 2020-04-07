import React, { Component } from "react";
import history from './../history';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './Login.css';


class Login extends Component {
    render() {
        return (
            <div style={{ justifyContent: 'center', padding: 30 }}>
                <img src="ExampleImage.png" alt="ExampleImage" align="center" class="center" style={{ width: '100px'}}></img>
                <div style={{ clear: 'both', margin: '25px' }} align="center"><h2>Login Page</h2></div>
                <div class="form-group" align="center">
                    <input type="text" class="login-box" id="username-input-box" placeholder="Username / Email Adddress"></input>
                </div>
                <div class="form-group" align="center">
                    <input type="text" class="login-box" id="password-input-box" placeholder="Password"></input>
                </div>
                <div align="left" style={{ width: '28%' }} class="center">
                    <td class="text-center"><input type="checkbox" class="form-check-input" value="0" id="remember-me"></input></td>
                    <td class="text-center">Remember Me</td>
                </div>
                <div>
                    <button type="submit" class="btn btn-success btn-default center" id="login-button"><span class="glyphicon glyphicon-off"></span> Login </button>
                </div>
                <div class="center" style={{ width: '30%' }}>
                    <Nav.Link href="/Signup">Don't have an account? Sign Up</Nav.Link>
                    <Nav.Link href="/Forget">Forget your password?</Nav.Link>
                </div>
            </div>
        );
    }
}

export default Login;