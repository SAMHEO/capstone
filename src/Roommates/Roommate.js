import React, { Component } from "react";
import { Spinner, Carousel, Container, Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./Roommate.css";

//This should be load from each user list.
let description =
  "I want to find an aparment with individual bedroom and bathroom\n";
let tags = ["Has Pets", "Smoke", "Like Parties", "Play Instruments"];

// function RenderTag(user) {
//   console.log(user);
//   return (

//   );
// }

//
//Change this with "display:none" if the user already finished the signup questions.
//
function PromptBox(selected) {
  console.log(selected.selected);
  if (!selected.selected || selected == null) {
    console.log(selected);
    return (
      <div className="modal" id="prompt-box" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ display: "block" }}>
              <img
                src="logo.png"
                id="main-logo-roommatepage-modal"
                alt="logo"
              />
              <h4>
                <span className="glyphicon glyphicon-th-list"></span>
                <span> Please Complete Basic Information Questionnaire</span>
              </h4>
            </div>
            <div id="modal-buttons" className="modal-footer">
              <Nav.Link href="/signupquestion">
                <button
                  id="go-signup-question"
                  className="btn btn-default center"
                >
                  <span className="glyphicon glyphicon-off"></span> → Let's Go!
                </button>
              </Nav.Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

class Roommate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      selected_tags: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("api/matchedusers")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        this.setState({
          userList: users,
          selected_tags: window.sessionStorage.getItem("selected_tags"),
          isLoading: false,
        });
      });
  }
  render() {
    const { selected_tags } = this.state;
    return (
      <Container className="text-center">
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
                    <h3>
                      {user.firstName} {user.lastName}
                    </h3>
                    <p>{user.phone}</p>
                    <div>
                      <div className="d-block w-50 center">
                        {user.description}
                      </div>
                      <div className="infoTagBox">
                        <div className="theTag" id="tag-1">
                          {tags[0]}
                        </div>
                        <div className="theTag" id="tag-2">
                          {tags[1]}
                        </div>
                        <div className="theTag" id="tag-3">
                          {tags[2]}
                        </div>
                        <div className="theTag" id="tag-4">
                          {tags[3]}
                        </div>
                      </div>
                    </div>
                  </Carousel.Caption>
                  <div className="spacer"></div>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
          <PromptBox selected={selected_tags} />
        </div>
        {/* Change this with "display:none" if the user already finished the signup questions. */}
      </Container>
    );
  }
}

export default Roommate;
