import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";

//This is an example of user. Whieh will be used to connect with the database api
// var tempUser1Name = "user1";
// var tempUser1Des =
//   "I want to find an apartment with individual bedroom and bathroom.";
// var tempUser1Time = "April 4, 2020, 22:37";
// function Post1() {
//   return (
//     <div class="card">
//       <img src="terraceview.jpeg" class="card-img-top" alt="postUserImage" />
//       <div class="card-body">
//         <h5 class="card-title">{tempUser1Name}</h5>
//         <p class="card-text">
//           {tempUser1Des} {tempUser1Time}
//         </p>
//       </div>
//     </div>
//   );
// }
// var tempUser2Name = "user2";
var tempUser2Des = "I want to find a roommate with similar lifestyle as me.";
var tempUser2Time = "April 4, 2020, 22:33";
// function Post2() {
//   return (
//     <div class="card">
//       <img src="avatar.png" class="card-img-top" alt="ExampleImage" />
//       <div class="card-body">
//         <h5 class="card-title">{tempUser2Name}</h5>
//         <p class="card-text">
//           {tempUser2Des} {tempUser2Time}
//         </p>
//       </div>
//     </div>
//   );
// }

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartmentList: [],
      userList: []
    };
  }

  callApi1() {
    fetch("api/homeApt")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        //console.log(json);
        this.setState({ apartmentList: json});
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
      this.setState({ userList: json});
      //console.log(this.state.apartmentList[0].name);
    });
  }
  //loads intial apartment data when home page opens
  componentDidMount(){
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
                <h1>Best Deal Apartments</h1>
              </div>
            </div>
          </Row>

          <Row>
            {this.state.apartmentList.map((apt, index) => (
            <Col>
            <temp>

            <div class="card">
              <img src="terraceview.jpeg" class="card-img-top" alt="postUserImage" />
              <div class="card-body">
                <h5 class="card-title">{apt.name}</h5>
                <p class="card-text">
                </p>
              </div>
            </div>
              
            </temp>
            </Col>
            )
          )};
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
          {this.state.userList.map((user, index) => (
            <Col>

            <div class="card">
              <img src="avatar.png" class="card-img-top" alt="postUserImage" />
              <div class="card-body">
                <h5 class="card-title">{user.name}</h5>
                <p class="card-text">
                  {tempUser2Des} {tempUser2Time}
                </p>
              </div>
            </div>
              
            </Col>
            )
          )};
          </Row>
        </Container>
        <hr />
      </div>
    );
  }
}
