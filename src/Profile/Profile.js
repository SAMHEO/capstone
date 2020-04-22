import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
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
      isLoading: true,
    };
  }
  edit = (e) => {};

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  componentDidMount() {
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
          isLoading: false,
        });
      });
  }
  render() {
    const { isLoading, user } = this.state;
    return (
      <Container className="text-center mt-5">
        <div className="profile-wrapper">
          {isLoading ? (
            <Spinner animation="grow" />
          ) : (
            <div className="profile-canvas">
              <Col xs={12} md={8} lg={4}>
                left side
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
                  <p> {`${user.sex}`.toUpperCase()}</p>
                  <p>Age: {getAgeFromBirthdate(user.age)}</p>
                </div>
                <Col xs={12} md={8} lg={12} id="profile-col-3">
                  <div className="profile-box" id="basic-info">
                    {`${user.occupation}` == null ? (
                      <div />
                    ) : (
                      <li>{`${user.occupation}`.toUpperCase()}</li>
                    )}
                    <li>Looking for Rent under {user.rent}</li>
                  </div>
                </Col>
              </Col>
              <Col xs={0} md={4} lg={9}>
                right side
                <div className="profile-box">
                  <div id="basic-info" className="profile-tag-box">
                    <h4 className="profile-box-title">Short description</h4>
                    {user.description}
                  </div>
                </div>
                <div className="profile-box">
                  <div id="basic-info" className="profile-tag-box">
                    <h4 className="profile-box-title">My Personality</h4>
                    <TagTemplate name="Introvert" />
                    <TagTemplate name="Quiet" />
                    <TagTemplate name="Dislike Party" />
                  </div>
                </div>
                <div className="profile-box">
                  <div id="apartment-info" className="profile-tag-box">
                    <h4 className="profile-box-title">I hope my roommate is</h4>
                    <TagTemplate name="Easygoing" />
                    <TagTemplate name="Has no Pet" />
                    <TagTemplate name="Has a vehicle" />
                  </div>
                </div>
                <div className="profile-box">
                  <div id="roommate-info" className="profile-tag-box">
                    <h4 className="profile-box-title">
                      I hope my apartment is
                    </h4>
                    <TagTemplate name="Individual Bedroom" />
                    <TagTemplate name="Individual Bathroom" />
                    <TagTemplate name="Near Bus Station" />
                  </div>
                </div>
              </Col>
            </div>
          )}
        </div>
        {/* <div className="profile-wrapper">
          {isLoading ? (
            <Spinner animation="grow" />
          ) : (
            <div id="profile-page">
              <div id="profile-main-container">
                <div class="center" id="photo-container">
                  <Image
                    src={this.state.image}
                    className="d-block center"
                    alt="..."
                    id="user-photo"
                    roundedCircle
                  />
                </div>
                <div></div>
                <div class="profile-box" id="profile-basic">
                  <h2>{this.state.name}</h2>
                  <p> {this.state.sex}</p>
                  <p>Age: {this.state.age}</p>
                </div>
                <Row>
                  <Col xs={12} md={8} lg={6} id="profile-col-1">
                    <div class="profile-box" id="basic-info">
                      <li>Looking for Rent under {this.state.rent}</li>
                      <li>Undergraduate student at Virginia Tech</li>
                      <li>
                        {this.state.description}
                        As a sophomore student at Virginia Tech, I just moved
                        out from university dormitory and I’m looking for an
                        apartment with an individual bedroom and bathroom in
                        each bedroom so that there is better privacy compared
                        with my life in-campus dormitory.
                      </li>
                    </div>
                  </Col>

                  <Col xs={6} md={4} lg={6} id="profile-col-2">
                    <div class="profile-box">
                      <div id="basic-info" class="profile-tag-box">
                        <h4 class="profile-box-title">My Personality</h4>
                        <TagTemplate1 />
                        <TagTemplate2 />
                        <TagTemplate3 />
                      </div>
                    </div>

                    <div class="profile-box">
                      <div id="apartment-info" class="profile-tag-box">
                        <h4 class="profile-box-title">I hope my roommate is</h4>
                        <TagTemplate4 />
                        <TagTemplate5 />
                        <TagTemplate6 />
                      </div>
                    </div>

                    <div class="profile-box">
                      <div id="roommate-info" class="profile-tag-box">
                        <h4 class="profile-box-title">
                          I hope my apartment is
                        </h4>
                        <TagTemplate7 />
                        <TagTemplate8 />
                        <TagTemplate9 />
                      </div>
                    </div>
                  </Col>
                </Row>
                <button
                  type="edit"
                  class="btn btn-success btn-default center"
                  id="edit-button"
                  onClick={this.edit}
                >
                  <Nav.Link href="/profileedit" id="edit-link">
                    Edit
                  </Nav.Link>
                </button>
              </div>
            </div>
          )}
        </div>    */}
      </Container>
    );
  }
}

export default Profile;
