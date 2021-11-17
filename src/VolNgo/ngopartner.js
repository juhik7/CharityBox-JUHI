import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import firebase from "firebase";
import "./juhi.css";
import logo11 from "../../src/VolNgo/image/ngopic2.jpg"
import logo12 from "../../src/VolNgo/image/ngopic3.jpg"
import logo13 from "../../src/VolNgo/image/ngopic4.jpg"

function Subscribe2() {
  const msg2 = firebase.messaging();
  msg2.requestPermission().then(() => {
    return msg2.getToken();
  }).then(ngoToken => {
    alert("Notification is on");
    let Token2 = firebase.database().ref().child('ngoToken').child(ngoToken);
    Token2.set(ngoToken);
  })
}
var email = "abc@gmail.com"
function Ngopartner() {
  return (
    <>
      <div className="container">
        <h1>Become our Partner NGO</h1>
        <h4>We want your organization to get more non-monetary donations – clothes, stationery, household goods and other items that you can use to make a difference. Just tell us your requirements and we will fulfill them in the best possible way.</h4>
      </div>
      <div className="container">
        <h4>How we support NGOs?
        </h4>
      </div>
      <div className="container">
        <p>We fulfill your needs by collecting donations from different donors and deliver them to you
        </p>
        <p>We spread awareness about the different causes you support</p>
        <p>We let people know about your great work and your requirements</p>
        <p>We connect you corporates & volunteers.
        </p>
        <p>To become our partner, send us a mail at ngo@sadsindia.org. Let’s Spread Happiness together!!</p> </div>
      <div className="container">
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img className="imagecss" variant="top" src={logo11} />
              <Card.Body>
                <Card.Title>Raksana Charitable Trust</Card.Title>
               
              
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img className="imagecss" variant="top" src={logo12} />
              <Card.Body>
                <Card.Title>Angels Orphanage</Card.Title>
            
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img className="imagecss" variant="top" src={logo13} />
              <Card.Body>
                <Card.Title>Shivashakthi Mahila Sangha</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="i"
              src={logo12}
              alt="First slide"
            />
            <Carousel.Caption>

              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="i"
              src={logo11}
              alt="Second slide"
            />

            <Carousel.Caption>

              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="i"
              src={logo13}
              alt="Third slide"
            />

            <Carousel.Caption>

              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <button onClick={Subscribe2}>get notification</button>
      </div>
    </>
  )
}
export default Ngopartner;



















