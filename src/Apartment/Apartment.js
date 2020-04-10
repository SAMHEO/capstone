import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Apartment.css";

var tempApt1Name = "Edge";
var tempApt1Time = "April 4, 2020, 22:37";
function ApartmentPostExample1() {
  return (
    <div class="card ">
      <div className="row">
        <img src="edge.jpg" class="col-sm-6" alt="ExampleImage" />
        <div class="col-sm-6">
          <h5 class="card-title">{tempApt1Name}</h5>
          <p class="card-text">
            <p>500 Hunt Club Rd.</p>
            <p>$480 / Month</p>
            <p>3 bedrooms apartment for rent</p>
            {tempApt1Time}
          </p>
        </div>
      </div>
    </div>
  );
}

class Apartment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  search = (e) => {
    alert("Search button clicked");
  };

  render() {
    return (
      <Container>
        <button
          type="button"
          class="btn btn-success btn-default center"
          id="search-button"
          onClick={this.search}
        >
          <span class="glyphicon glyphicon-off"></span> Search{" "}
        </button>
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
