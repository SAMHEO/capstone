import React, { Component } from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class Navigation extends Component {
  render() {
    const { logged, onLogout } = this.props;
    return (
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark" /*fixed="top"*/
      >
        <Navbar.Brand href="/">
          <img src="logo.png" id="main-logo" alt="Home" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="navbar-nav ml-auto" id="nav-bar-container">
            <Nav.Item className="link-item">
              <Nav.Link eventKey="1" href="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="link-item">
              <Nav.Link eventKey="2" href="/apartment">
                Apartment
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="link-item">
              <Nav.Link eventKey="3" href="/roommate">
                Roommates
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item class="link-item">
              <Nav.Link eventKey="4" href="/about">
                About
              </Nav.Link>
            </Nav.Item> */}
            {logged ? (
              <Navbar.Collapse>
                <Nav.Item className="link-item">
                  <Nav.Link eventKey="5" href="/profile">
                    {JSON.parse(sessionStorage.getItem("userinfo")).name}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="link-item">
                  <Nav.Link eventKey="6" href="/" onClick={onLogout}>
                    Log out
                  </Nav.Link>
                </Nav.Item>
              </Navbar.Collapse>
            ) : (
              <Nav.Item className="link-item">
                <Nav.Link eventKey="6" href="/login">
                  Log in
                </Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default withRouter(Navigation);
