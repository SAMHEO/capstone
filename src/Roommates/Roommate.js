import React, { Component } from "react";
import { Spinner, Carousel, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./Roommate.css";

class Roommate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("api/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        console.log(users);
        this.setState({
          userList: users,
          isLoading: false,
        });
        console.log(this.state);
      });
  }
  render() {
    return (
      <Container className="text-center mt-5">
        {this.state.isLoading ? (
          <Spinner animation="grow" />
        ) : (
          <Carousel /*keyboard="true"*/>
            {this.state.userList.map((user, index) => (
              <Carousel.Item key={index}>
                <Image
                  className="d-block w-50 center"
                  src="avatar.png"
                  alt="First slide"
                  roundedCircle
                />
                <Carousel.Caption>
                  <h3>{user.name}</h3>
                  <p>{user.phone}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Container>
    );
  }
}

export default Roommate;
