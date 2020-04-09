import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Navigation = (props) => {
  console.log(props);
  return (
    <Navbar bg="primary" variant="dark" /*fixed="top"*/>
      <Navbar.Brand href="/">Home Finder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/">Piazza</Nav.Link>
          <Nav.Link href="/apartment">Apartment</Nav.Link>
          <Nav.Link href="/roommate">Roommates</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navigation);
