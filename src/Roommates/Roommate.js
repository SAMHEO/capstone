import React, { Component } from "react";
import { Spinner, Carousel, Container, Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { withRouter } from "react-router-dom";
import "./Roommate.css";

//This should be load from each user list.
let description =
  "I want to find an aparment with individual bedroom and bathroom\n";
let tags = ["Has Pets", "Smoke", "Like Parties", "Play Instruments"];

function RenderTag() {
  return (
    <div>
      <div className="d-block w-50 center">{description}</div>
      <h4>I am: </h4>
      <div className="infoTagBox">
        <div class="theTag" id="tag-1">
          {tags[0]}
        </div>
        <div class="theTag" id="tag-2">
          {tags[1]}
        </div>
        <div class="theTag" id="tag-3">
          {tags[2]}
        </div>
        <div class="theTag" id="tag-4">
          {tags[3]}
        </div>
      </div>
    </div>
  );
}

//
//Change this with "display:none" if the user already finished the signup questions.
//
function PromptBox() {
  return (
    <div class="modal" id="prompt-box" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header" style={{display:"block"}}>
            <img
                      src="logo.png"
                      id="main-logo-roommatepage-modal"
                    />
            <h4><span class="glyphicon glyphicon-th-list"></span><span> Please Complete Basic Information Questionnaire</span></h4>
          </div>
          <div id="modal-buttons" class="modal-footer">
          <Nav.Link href="/signupquestion"><button id = 'go-signup-question' class="btn btn-default center"><span class="glyphicon glyphicon-off"></span> → Let's Go! </button></Nav.Link>
          </div>
        </div>
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
      <Container className="text-center">
        <div align="center">
          <img
            src="logo.png"
            id="main-logo-roommatepage"
          />
        </div>
        <div className="roommate-wrapper">
          {this.state.isLoading ? (
            <Spinner animation="grow" />
          ) : (
            <Carousel /*keyboard="true"*/>
              {this.state.userList.map((user, index) => (
                <Carousel.Item key={index}>
                  <Image
                    className="d-block w-25 center"
                    src="avatar.png"
                    alt={index}
                    roundedCircle
                    fluid
                  />
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
        </div>
        {/* Change this with "display:none" if the user already finished the signup questions. */}
        <PromptBox />
      </Container>
    );
  }
}

export default Roommate;
