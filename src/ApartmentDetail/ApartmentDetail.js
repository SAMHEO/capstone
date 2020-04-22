import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactStars from 'react-stars'
import Image from "react-bootstrap/Image";
import { Spinner, Carousel, Container, Nav } from "react-bootstrap";
import "./ApartmentDetail.css";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const ratingChanged = (newRating) => {
    //To do some to calculate the average and write into the database.
    //WARNING: Only login can rate apartment.
    console.log(newRating)
  }
  

class ApartmentDetail extends Component {

    render() {
        return (
            <div id="apartment-detail-main">
                <Nav.Link href="/apartment" style={{marginLeft: "-40px"}}> 《 Back to Apartment Page </Nav.Link>
                <Row><h1>Terrace View Apartment</h1></Row>
                <Row>
                    <Col xs={12} md={8} lg={6} >
                        <ul>
                            <li class="apartment-detail-info"><div style={{marginRight: "10px"}}>Home Finder Rate:  </div><ReactStars
                                count={5}
                                value={3}
                                size={24}
                                edit={false}
                                color2={'#ffd700'} /></li>

                            {/* These information load from database */}
                            <li class="apartment-detail-info">Rent: $600 / Month</li>
                            <li class="apartment-detail-info">Number of Rooms: 1</li>
                            <li class="apartment-detail-info">Introduction: <div>"Terrace View Apartments luxury apartments for rent in Blacksburg, VA offers a variety of floor plans that fits your style!  At Terrace View Apartments, we focus on what's really important - YOU!"</div></li>
                            <li class="apartment-detail-info">Website: <Nav.Link href="https://www.terraceviewapartments.com/" style={{padding: "0em 1em"}}> TerraceView </Nav.Link></li>
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
                            <li class="apartment-detail-info" style={{ marginTop: "20px", marginLeft: "30px"}}>
                                <div style={{marginRight: "10px"}}>How do you like this apartment? Click to rate</div>
                                <ReactStars
                                    count={5}
                                    value={3}
                                    size={24}
                                    edit={true}
                                    onChange={ratingChanged}
                                    color2={'#ffd700'} />
                            </li>
                    </Col>
                    <Col xs={0} md={4} lg={6}>
                        <div id="apartment-address-container">
                            <img src="https://img.icons8.com/ultraviolet/40/000000/map-marker.png" style={{float: "left", margin: "5px"}}/>
                            <h4 style={{paddingTop: "10px"}}>413 Hunt Club Rd, Blacksburg, VA 24060</h4>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.1976420628057!2d-80.42722274903016!3d37.24301795024808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d956428ac6aed%3A0x3f5d409de35b8a38!2sTerrace%20View%20Apartments!5e0!3m2!1sen!2sus!4v1587527682952!5m2!1sen!2sus" width="800" height="700" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </Col>
                </Row>
            </div>
        );
    }
}


export default ApartmentDetail