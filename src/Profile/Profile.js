import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import "./Profile.css";

function TagTemplate(tag) {
  return <div className="tag">{tag.name}</div>;
}

function getAgeFromBirthdate(birthdate) {
  var birthday = new Date(birthdate);
  var today = new Date();
  var years = today.getFullYear() - birthday.getFullYear();
  return years;
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userCritical: [],
      userSecondary: [],
      userHobbies: [],
      isLoading: true,
    };
  }
  edit = (e) => {};

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  componentDidMount() {
    console.log(this.state);
    const userInfo = JSON.parse(window.sessionStorage.getItem("userinfo"));
    const fetch_info = {
      method: "POST",
      body: JSON.stringify({
        email: userInfo.email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("api/account/user", fetch_info)
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        this.setState({
          user: body,
        });
        this.getTags();
      });
  }

  getTags() {
    const info = {
      method: "POST",
      body: JSON.stringify({
        id: this.state.user.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("api/account/usercritical", info)
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        this.setState({
          userCritical: body,
        });
      })
      .then(
        fetch("api/account/usersecondary", info)
          .then((res) => {
            return res.json();
          })
          .then((body) => {
            this.setState({
              userSecondary: body,
            });
          })
      )
      .then(
        fetch("api/account/userhobbies", info)
          .then((res) => {
            return res.json();
          })
          .then((body) => {
            this.setState({
              userHobbies: body,
              isLoading: false,
            });
          })
      );
  }
  render() {
    const {
      isLoading,
      user,
      userCritical,
      userSecondary,
      userHobbies,
    } = this.state;
    return (
      <Container className="text-center mt-5">
        <div className="profile-wrapper">
          {isLoading ? (
            <Spinner animation="grow" />
          ) : (
            <div className="profile-canvas">
              <Col xs={12} md={8} lg={4}>
                <div className="center" id="photo-container">
                  <Image
                    src={user.image}
                    className="d-block center"
                    alt="..."
                    id="user-photo"
                    roundedCircle
                  />
                </div>
                <div className="profile-box" id="profile-basic">
                  <h2>
                    {this.capitalize(`${user.firstname}`)}{" "}
                    {this.capitalize(`${user.lastname}`)}
                  </h2>
                  <p>
                    {user.sex === "none" ? "N/A" : `${user.sex}`.toUpperCase()}
                  </p>
                  <p>Age: {getAgeFromBirthdate(user.age)}</p>
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    {`${user.occupation}` == null ? (
                      <div />
                    ) : (
                      `${user.occupation}`.toUpperCase()
                    )}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Looking for Rent under {user.rent}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="/profileedit">Edit</a>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={0} md={4} lg={9}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <div className="profile-box">
                      <div id="basic-info" className="profile-tag-box">
                        <h4 className="profile-box-title">Short description</h4>
                        {user.description}
                      </div>
                    </div>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <div className="profile-box">
                      <div id="basic-info" className="profile-tag-box">
                        <h4 className="profile-box-title">Important</h4>
                        {userCritical.map((tag, index) => (
                          <TagTemplate name={`${tag.name}`} key={index} />
                        ))}
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="profile-box">
                      <div id="apartment-info" className="profile-tag-box">
                        <h4 className="profile-box-title">Considerable</h4>
                        {userSecondary.map((tag, index) => (
                          <TagTemplate name={`${tag.name}`} key={index} />
                        ))}
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="profile-box">
                      <div id="roommate-info" className="profile-tag-box">
                        <h4 className="profile-box-title">Hobbies</h4>
                        {userHobbies.map((tag, index) => (
                          <TagTemplate name={`${tag.name}`} key={index} />
                        ))}
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </div>
          )}
        </div>
      </Container>
    );
  }
}

export default Profile;
