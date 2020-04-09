import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import history from "../history";
import "./Roommate.css";

function ApartmentPost(name, address, price, description) {
  return (
    <div class="posts apartment">
      <img
        src="ExampleImage.png"
        alt="ExampleImage"
        class="postUserImage"
      ></img>
      <p>{name}</p>
      <p>{address}</p>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
}

function ApartmentPostExample1() {
  return (
    <div class="posts apartment">
      <img
        src="ExampleImage.png"
        alt="ExampleImage"
        class="postUserImage"
      ></img>
      <p>TerraceView</p>
      <p>500 Hunt Club Rd.</p>
      <p>$480 / Month</p>
      <p>3 bedrooms apartment for rent</p>
    </div>
  );
}

class Roommate extends Component {
  render() {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };

    return (
      <Container>
        <Carousel /*keyboard="true"*/>
          <Carousel.Item>
            <Image
              className="d-block w-50 center"
              src="logo192.png"
              alt="First slide"
              roundedCircle
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-50 center"
              src="logo192.png"
              alt="Second slide"
              roundedCircle
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-50 center"
              src="logo192.png"
              alt="Third slide"
              roundedCircle
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default Roommate;
