import React, { Component } from "react";
import { Spinner, Carousel, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./Roommate.css";

//This should be load from each user list.
let description="I want to find an aparment with individual bedroom and bathroom\n";
let tags=["Has Pets", "Smoke", "Like Parties", "Play Instruments"];

function RenderTag() {
  return (
    <div>
      <div className="d-block w-50 center">{description}</div>
      <h4>I am: </h4> 
      <div className="infoTagBox">
        <div class="theTag" id="tag-1">{tags[0]}</div>
        <div class="theTag" id="tag-2">{tags[1]}</div>
        <div class="theTag" id="tag-3">{tags[2]}</div>
        <div class="theTag" id="tag-4">{tags[3]}</div>
      </div>
    </div>
  );
}

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
                <div id="userImage">
                <Image
                  className="d-block w-50 center"
                  src="avatar.png"
                  alt="First slide"
                  roundedCircle
                />
                </div>
                <Carousel.Caption>
                  <h3>{user.name}</h3>
                  <p>{user.phone}</p>
                  <RenderTag />
                </Carousel.Caption>
                <div class="spacer"></div>
              </Carousel.Item>
            ))}
            
          </Carousel>
        )}
      </Container>
    );
  }
}

export default Roommate;