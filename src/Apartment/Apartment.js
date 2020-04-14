import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Apartment.css";

// var tempApt1Name = "Edge";
// var tempApt1Time = "April 4, 2020, 22:37";
// function ApartmentPostExample1() {
//   return (
//     <div class="card ">
//       <div className="row">
//         <img src="edge.jpg" class="col-sm-6" alt="ExampleImage" />
//         <div class="col-sm-6">
//           <h5 class="card-title">{tempApt1Name}</h5>
//           <p class="card-text">
//             <p>500 Hunt Club Rd.</p>
//             <p>$480 / Month</p>
//             <p>3 bedrooms apartment for rent</p>
//             {tempApt1Time}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

class Apartment extends Component {
  constructor(props) {
    super(props);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      sort: "",
      maxPrice: "",
      numBeds: "",
      nameOfAPT: "",
      priceOFAPT: 0,
      apartmentList: [],
    };
  }

  handleSort = (e) => {
    this.setState({ sort: e.target.value });
  };
  handleMaxPrice = (e) => {
    this.setState({ maxPrice: e.target.value });
  };
  handleNumBeds = (e) => {
    this.setState({ numBeds: e.target.value });
  };

  componentDidMount() {
    fetch("api/getApts")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        //console.log(body);
        this.setState({ apartmentList: json });
        //console.log("hello", this.state);
      });
  }

  search = (e) => {
    e.preventDefault();

    const search_info = {
      method: "POST",
      //make the body to the name of the apartment for now
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("api/search", search_info)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        if (json.success === true) {
          alert("Found!");
          console.log(json);
          window.localStorage.setItem("userInfo", JSON.stringify(json));
          this.setState({
            apartmentList: json.aptList,
          });
          this.props.history.push("/apartment");
          console.log(this.state);
        } else {
          alert("Could not find any");
        }
      });
  };

  render() {
    return (
      <div className="mt-5">
        <Row>
          <div style={{ justifyContent: "center", padding: 30 }}>
            <div class="input-group mb-3" id="input-group1">
              <div class="input-group-prepend">
                <label class="input-group-text" for="Sort">
                  Preferences
                </label>
              </div>
              <select
                class="custom-select"
                id="inputGroupSelect01"
                onChange={this.handleSort}
              >
                <option selected>Sort</option>
                <option value="1">Price(Low to High)</option>
                <option value="2">Price(Hight to Low)</option>
              </select>
            </div>

            <div class="input-group mb-3" id="input-group2">
              <div class="input-group-prepend">
                <span class="input-group-text">Maximum amount </span>
                <span class="input-group-text">0.00</span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
                onChange={this.handleMaxPrice}
              ></input>
            </div>

            <div class="input-group mb-3" id="input-group3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="Beds">
                  Preferences
                </label>
              </div>
              <select
                class="custom-select"
                id="inputGroupSelect02"
                onChange={this.handleNumBeds}
                numBeds={this.value}
              >
                <option selected>Beds</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4 +</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                class="btn btn-success btn-default center"
                id="search-button"
                onClick={this.search}
                align="right"
              >
                <span class="glyphicon glyphicon-off"></span> Search{" "}
              </button>
            </div>
          </div>
        </Row>
        <Row>
          <Col xs={12} md={8} lg={6}>
            <div class="apartmentPostsArea">
              {this.state.apartmentList.map((apt, index) => (
                <div class="card" key={index}>
                  <div className="row">
                    <img src="edge.jpg" class="col-sm-6" alt="ExampleImage" />
                    <div class="col-sm-6">
                      <h5 class="card-title">{apt.name}</h5>
                      <p class="card-text">
                        <p>Price: ${apt.rent}</p>
                        <p>Location: {apt.address}</p>
                        <p>Rate: {apt.rate}</p>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={6} md={4} lg={6}>
            <p>Map View Placeholder</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Apartment;
