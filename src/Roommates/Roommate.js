import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./Roommate.css";

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
              src="avatar.png"
              alt="First slide"
              roundedCircle
            />
            <Carousel.Caption>
              <h3>User 1</h3>
              <p>
                I want to find a roommate with similar lifestyle as me first
                person
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-50 center"
              src="avatar.png"
              alt="Second slide"
              roundedCircle
            />

            <Carousel.Caption>
              <h3>User 2</h3>
              <p>
                I want to find a roommate with similar lifestyle as me second
                person
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-50 center"
              src="avatar.png"
              alt="Third slide"
              roundedCircle
            />

            <Carousel.Caption>
              <h3>User 3</h3>
              <p>
                {" "}
                want to find a roommate with similar lifestyle as me third
                person
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default Roommate;
