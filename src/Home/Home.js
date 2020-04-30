import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import ReactStars from "react-stars";
import Nav from "react-bootstrap/Nav";

var tempUser2Des = "I want to find a roommate with similar lifestyle as me.";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartmentList: [],
      userList: [],
    };
  }

  callApi1() {
    fetch("api/homeApt")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        //console.log(json);
        this.setState({ apartmentList: json });
        //console.log(this.state.apartmentList[0].name);
      });
  }
  callApi2() {
    fetch("api/homeUser")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        //console.log(json);
        this.setState({ userList: json });
        //console.log(this.state.apartmentList[0].name);
      });
  }
  //loads intial apartment data when home page opens
  componentDidMount() {
    this.callApi1();
    this.callApi2();
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="row justify-content-center">
            <div>
              <div id="logo">
                <h1>Best Apt Deals in Blacksburg</h1>
              </div>
            </div>
          </Row>

          <Row>
            {this.state.apartmentList.map((apt, index) => (
              <Col key={index} height="200">
                <div className="card">
                  <img
                    src={`${apt.shortName}` + ".jpeg"}
                    className="card-img-top"
                    height="200"
                    alt="postUserImage"
                  />
                  <div className="card-body" height="200">
                    <Nav.Link
                      className="aprtname"
                      href={`/apartmentdetail/${apt.name}`}
                      style={{ marginLeft: "-17px" }}
                      component={apt.shortName}
                    >
                      {" "}
                      {apt.name}{" "}
                    </Nav.Link>
                    {/* <p className="card-text">{apt.description}</p> */}
                    <ReactStars
                      count={5}
                      value={parseInt(apt.rate)}
                      size={24}
                      edit={false}
                      color2={"#ffd700"}
                    />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="row justify-content-center">
            <div className="Home">
              <div id="logo">
                <h1>Looking for Roommates</h1>
              </div>
            </div>
          </Row>
          <Row>
            {this.state.userList.map((user, index) => (
              <Col key={index}>
                <div className="card">
                  <img
                    src="avatar.png"
                    className="card-img-top"
                    alt="postUserImage"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{user.firstName}</h5>
                    <p className="card-text">
                      {tempUser2Des} {user.created}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <hr />
      </div>
    );
  }
}
