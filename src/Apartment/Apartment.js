import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Apartment.css";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import Nav from "react-bootstrap/Nav";
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

class Apartment extends Component {
  constructor(props) {
    super(props);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this)z;
    this.state = {
      sort: "",
      maxPrice: "",
      numBeds: "",
      nameOfAPT: "",
      numRate: "",
      numBath: "",
      nameAptDetail : "",
      priceOFAPT: 0,
      apartmentList: [],
      apartmentAddressList: [],
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
  handleRate = (e) => {
    this.setState({numRate: e.target.value})
  }
  handleBath = (e) => {
    this.setState({numBath: e.target.value})
  }
  handleApartDetail = (e) => {
    this.setState({nameAptDetail: e.target.value})
  }

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
        console.log(this.state.apartmentAddressList[0].address);
      });
  }
  componentDidMount() {
    //console.log("bye "+ API_KEY);
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
      width: "100%",
      height: "100%",
    };
    return (
      <div className="mt-5">
        <Row id="apartment-search" className="sticky-top">
          <div className="search-bar-content">
            {/* <div class="input-group" id="input-group1">
              <select
                class="custom-select"
                id="inputGroupSelect01"
                onChange={this.handleSort}
              >
                <option selected>Sort</option>
                <option value="1">Price(Low to High)</option>
                <option value="2">Price(Hight to Low)</option>
              </select>
            </div> */}

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

            <div class="input-group" id="input-group3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="Beds">
                  Rating
                </label>
              </div>
              <select
                class="custom-select"
                id="inputGroupSelect02"
                onChange={this.handleRate}
                numRate={this.value}
              >
                <option selected>Rate</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div class="input-group" id="input-group3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="Beds">
                  Baths
                </label>
              </div>
              <select
                class="custom-select"
                id="inputGroupSelect02"
                onChange={this.handleBath}
                numBath={this.value}
              >
                <option selected>Baths</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
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
                          {/* To get each apartment's link from database */}
                          {/* onChange={this.handleApartDetail}
                          nameAptDetail={apt.shortName} */}
                          <Nav.Link
                            href= {`/apartmentdetail?q=${apt.shortName}`}
                            style={{ marginLeft: "-17px" }}
                            component={apt.shortName}
                          >
                            {" "}
                            Detail{" "}
                          </Nav.Link>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col xs={0} md={4} lg={6} id="map-canvas">
              <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 37.2296, lng: -80.41394 }}
              >
                <Marker position={{ lat: 37.2296, lng: -80.41394 }} />
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
  apiKey: API_KEY,
})(Apartment);
