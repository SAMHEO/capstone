import React, { Component, useState  } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Apartment.css";
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';


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
      apartmentAddressList:[],
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

  callApi1() {
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

  //getting the address
  callApi2() {
    fetch("api/getAddress")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        //console.log(json);
        this.setState({ apartmentAddressList: json });
        console.log(this.state.apartmentAddressList[0].name);
      });
  }
  componentDidMount() {
    this.callApi1();
    this.callApi2();
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
    const mapStyles = {
      width: '100%',
      height: '100%',
   };
    return (
      <div className="mt-5">
        <Row id="apartment-search" className="sticky-top">
          <div className="search-bar-content">
            <div class="input-group" id="input-group1">
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

            <div class="input-group" id="input-group2">
              <div class="input-group-prepend">
                <span class="input-group-text">Maximum amount </span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
                onChange={this.handleMaxPrice}
              ></input>
            </div>

            <div class="input-group" id="input-group3">
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
            <button
              type="submit"
              class="btn center"
              id="search-button"
              onClick={this.search}
              align="right"
            >
              Search
            </button>
          </div>
        </Row>
        <div id="apartment-wrapper">
          <div className="apartment-canvas">
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
            <Col xs={0} md={4} lg={6}>
              {/* <div id="map-canvas">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.177673270392!2d-80.42827748475189!3d37.24349177985963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d95643a782885%3A0xc102eb0373bf89c9!2s500%20Hunt%20Club%20Rd%2C%20Blacksburg%2C%20VA%2024060!5e0!3m2!1szh-CN!2sus!4v1587028720939!5m2!1szh-CN!2sus"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div> */}
              {/* <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 37.2296, lng: -80.41394}}
              />
              <Marker position={{ lat: 37.2296, lng: -80.41394}} />
              </Map> */}
              <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 37.2296, lng: -80.41394}}
              >
                <Marker position={{lat: 37.2296, lng: -80.41394}} />
              </Map>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

// export default Apartment;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAzkfeOop2V656XTO9odjcvClucGnkIZFY'
})(Apartment)
