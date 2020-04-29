import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactStars from "react-stars";
import Image from "react-bootstrap/Image";
import { Carousel, Nav } from "react-bootstrap";
import "./ApartmentDetail.css";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;


const ratingChanged = (newRating) => {
  //To do some to calculate the average and write into the database.
  //WARNING: Only login can rate apartment.
  console.log(newRating);
};


class ApartmentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aptshortname: this.props.match.params.name,
      aptName: "",
      aptRent: "",
      aptRoom: "",
      aptRate: "",
      aptAddress: "",
      aptWebsite: "",
      aptDescription: "",
      aptDetail: [],
    };
  }
  handledetail = (e) => {
    this.setState({ aptshortname: e.target.value });
  };

  componentDidMount() {

    console.log(this.state);

    // e.preventDefault();
    const detail_info = {
      method: "POST",
      //make the body to the name of the apartment for now
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("/api/aptdetail", detail_info)
      .then((res) =>{
        return res.json();
      })
    .then((json) => {
      console.log(json);
      if (json.success === true) {
        console.log(json.aptRate);
        window.localStorage.setItem("userInfo", JSON.stringify(json));
        this.setState({
          aptName: json.aptName,
          aptRent: json.aptRent,
          aptRoom: json.aptRoom,
          aptAddress: json.aptAddress,
          aptRate: json.aptRate,
          aptWebsite: json.aptWebsite,
          aptDescription: json.aptDescription
        });
        //this.props.history.push("/apartmentdetail");
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
    // let url = this.props.location.search;
    // let params = this.props.match.params.q
    // console.log(params);
    return (
      <div id="apartment-detail-main">
        <Nav.Link href="/apartment" style={{ marginLeft: "-40px" }}>
          {" "}
          《 Back to Apartment Page{" "}
        </Nav.Link>
        <Row>
          <h1>{this.state.aptName}</h1>
        </Row>
        <Row>
          <Col xs={12} md={8} lg={6}>
            <ul>
              <li class="apartment-detail-info">
                <div style={{ marginRight: "10px" }}>Home Finder Rate: </div>
                <ReactStars
                  count={5}
                  value={parseInt(this.state.aptRate)}
                  size={24}
                  edit={false}
                  color2={"#ffd700"}
                />
              </li>

              {/* These information load from database */}
              <li class="apartment-detail-info">Rent: ${this.state.aptRent} / Month</li>
              <li class="apartment-detail-info">Number of Rooms: {this.state.aptRoom} </li>
              <li class="apartment-detail-info">
                Introduction:{" "}
                <div>
                  {this.state.aptDescription}
                </div>
              </li>
              <li class="apartment-detail-info">
                Website:{" "}
                <Nav.Link
                  href={this.state.aptWebsite}
                  style={{ padding: "0em 1em" }}
                >
                  {" "}
                  {this.state.aptName}{" "}
                </Nav.Link>
              </li>
              <div class="apartment-detail-page-spacer" />
            </ul>
            <Carousel /*keyboard="true"*/>
              <Carousel.Item key={1}>
                <Image
                  className="apartment-image"
                  src="terraceview1.jpg"
                  alt="1"
                  fluid
                />
              </Carousel.Item>
              <Carousel.Item key={2}>
                <Image
                  className="apartment-image"
                  src="terraceview2.jpg"
                  alt="2"
                  fluid
                />
              </Carousel.Item>
              <Carousel.Item key={3}>
                <Image
                  className="apartment-image"
                  /* You can only save the link of these photos in database, and load from terraceview's website. */
                  src="terraceview3.jpg"
                  alt="3"
                  fluid
                />
              </Carousel.Item>
            </Carousel>
            <li
              class="apartment-detail-info"
              style={{ marginTop: "20px", marginLeft: "30px" }}
            >
              <div style={{ marginRight: "10px" }}>
                How do you like this apartment? Click to rate
              </div>
              <ReactStars
                count={5}
                value={3}
                size={24}
                edit={true}
                onChange={ratingChanged}
                color2={"#ffd700"}
              />
            </li>
          </Col>
          <Col xs={0} md={4} lg={6}>
            <div id="apartment-address-container">
              <img
                src="https://img.icons8.com/ultraviolet/40/000000/map-marker.png"
                style={{ float: "left", margin: "5px" }}
              />
              <h4 style={{ paddingTop: "10px" }}>
                {this.state.aptAddress}
              </h4>
            </div>
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
          </Col>
        </Row>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(ApartmentDetail);
// export default ApartmentDetail;
