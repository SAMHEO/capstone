import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Apartment.css";

function ApartmentPostExample1() {
  return (
    <div class="posts apartment">
      <img src="edge.jpg" alt="ExampleImage" class="postUserImage"></img>
      <p>TerraceView</p>
      <p>500 Hunt Club Rd.</p>
      <p>$480 / Month</p>
      <p>3 bedrooms apartment for rent</p>
    </div>
  );
}

class Apartment extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <div style={{ justifyContent: "center", padding: 30 }}>
              <div class="center">
                <h2 id="apartmentLogo" align="center" class="ceneter">
                  Apartment Page
                </h2>
              </div>
              <div class="apartmentPostsArea">
                <ApartmentPostExample1 />
                <ApartmentPostExample1 />
                <ApartmentPostExample1 />
                <ApartmentPostExample1 />
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default Apartment;
