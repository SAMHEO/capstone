import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import history from "./../history";
import "./Home.css";

function MainLogo() {
  return <h1>Home Finder</h1>;
}

function NewPost() {
  return (
    <div class="newPost">
      <label>Publish a new post: </label>
      <textarea
        class="form-control"
        rows="5"
        id="newPostInput"
        placeholder="Say something"
      ></textarea>
      <button
        type="submit"
        class="btn btn-success btn-default"
        id="submitPostButton"
      >
        <span class="glyphicon glyphicon-off"></span> Submit{" "}
      </button>
    </div>
  );
}

//This is an example of user. Whieh will be used to connect with the database api
var tempUser1Name = "user1";
var tempUser1Des =
  "I want to find an apartment with individual bedroom and bathroom.";
var tempUser1Time = "April 4, 2020, 22:37";
function Post1() {
  return (
    <div class="card">
      <img src="terraceview.jpeg" class="card-img-top" alt="postUserImage" />
      <div class="card-body">
        <h5 class="card-title">{tempUser1Name}</h5>
        <p class="card-text">
          {tempUser1Des} {tempUser1Time}
        </p>
      </div>
    </div>
  );
}
var tempUser2Name = "user2";
var tempUser2Des = "I want to find a roommate with similar lifestyle as me.";
var tempUser2Time = "April 4, 2020, 22:33";
function Post2() {
  return (
    <div class="card">
      <img src="avatar.png" class="card-img-top" alt="ExampleImage" />
      <div class="card-body">
        <h5 class="card-title">{tempUser2Name}</h5>
        <p class="card-text">
          {tempUser2Des} {tempUser2Time}
        </p>
      </div>
    </div>
  );
}

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="row justify-content-center">
            <div>
              <div id="logo">
                <h1>Best Deal Apartments</h1>
              </div>
            </div>
          </Row>

          <Row>
            <Col>
              <Post1 />
            </Col>
            <Col>
              <Post1 />
            </Col>
            <Col>
              <Post1 />
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row className="row justify-content-center">
            <div className="Home">
              <div id="logo">
                <h1>Looking for Roommates</h1>
              </div>
            </div>
          </Row>
          <Row>
            <Col>
              <Post2 />
            </Col>
            <Col>
              <Post2 />
            </Col>
            <Col>
              <Post2 />
            </Col>
          </Row>
        </Container>
        <hr />
      </div>
    );
  }
}
