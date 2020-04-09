import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Navigation = (props) => {
  console.log(props);
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Home Finder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/">Piazza</Nav.Link>
          <Nav.Link href="/Apartment">Apartment</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Profile">Profile</Nav.Link>
          <Nav.Link href="/Login">Login / Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navigation);
