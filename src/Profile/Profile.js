import React, { Component } from "react";
import { Spinner, Nav, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Profile.css";

function TagExample1() {
  return <div class="tag">Introvert</div>;
}
function TagExample2() {
  return <div class="tag">Quiet</div>;
}
function TagExample3() {
  return <div class="tag">Dislike Party</div>;
}
function TagExample4() {
  return <div class="tag">Easygoing</div>;
}
function TagExample5() {
  return <div class="tag">Has no pet</div>;
}
function TagExample6() {
  return <div class="tag">Has a vehicle</div>;
}
function TagExample7() {
  return <div class="tag">Individual Bedroom</div>;
}
function TagExample8() {
  return <div class="tag">Individual Bathroom</div>;
}
function TagExample9() {
  return <div class="tag">Near Bus Station</div>;
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
      id: 4,
      name: "John",
      age: 0,
      sex: "",
      phone: "",
      rent: 0,
      description: "",
      image: "",
      preferences: [],
      tags: [],
      isLoading: true,
    };
  }
  edit = (e) => {};

  componentDidMount() {
    const search_info = {
      method: "POST",
      body: JSON.stringify({ name: this.state.name }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("api/user", search_info)
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        console.log(body);
        this.setState({
          age: getAgeFromBirthdate(body.age),
          sex: body.sex.toUpperCase(),
          phone: body.phone,
          rent: body.rent,
          image: body.image,
          isLoading: false,
        });
        console.log(this.state);
      });
  }
  render() {
    const { isLoading } = this.state;
    return (
      <Container className="text-center mt-5">
        <div className="profile-wrapper">
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
                        <TagExample1 />
                        <TagExample2 />
                        <TagExample3 />
                      </div>
                    </div>

                    <div class="profile-box">
                      <div id="apartment-info" class="profile-tag-box">
                        <h4 class="profile-box-title">I hope my roommate is</h4>
                        <TagExample4 />
                        <TagExample5 />
                        <TagExample6 />
                      </div>
                    </div>

                    <div class="profile-box">
                      <div id="roommate-info" class="profile-tag-box">
                        <h4 class="profile-box-title">
                          I hope my apartment is
                        </h4>
                        <TagExample7 />
                        <TagExample8 />
                        <TagExample9 />
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
        </div>
      </Container>
    );
  }
}

export default Profile;
