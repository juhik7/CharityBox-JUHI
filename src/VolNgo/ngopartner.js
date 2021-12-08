import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import firebase from "firebase";
import "./juhi.css";
import logo11 from "../../src/VolNgo/image/ngopic2.jpg"
import logo12 from "../../src/VolNgo/image/ngopic3.jpg"
import logo13 from "../../src/VolNgo/image/ngopic4.jpg"



function Ngopartner() {
  return (
    <>
      <div className="container">
     <center>   <h1>Become our Partner NGO</h1></center>
         </div>
      <div className="container">
        <center><h5>How we support NGOs?
        </h5></center>
      </div>
      <div className="container">
        <h5>We fulfill your needs by collecting donations from different donors and deliver them to you
        </h5>
        
      <center>  <h5>We let people know about your great work and your requirements</h5>
        
       <h6>Let’s Spread Happiness together!!</h6> </center></div>
      <div className="container">
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img className="imagecss" variant="top" src={logo11} />
              <Card.Body>
                <Card.Title>Raksana Charitable Trust</Card.Title>
                <Card.Text>
                 <p> Contact No:6583903024</p>
                  <p>Location : Teacher colony bengaluru,560078</p></Card.Text>
              
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img className="imagecss" variant="top" src={logo12} />
              <Card.Body>
                <Card.Title>Angels Orphanage</Card.Title>
                <Card.Text>
                 <p> Contact No:9933903024</p>
                  <p>Location : Bensankri sector-3, bengaluru,560088</p>
                </Card.Text>
              
          
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img className="imagecss" variant="top" src={logo12} />
              <Card.Body>
                <Card.Title>MY World Orphanage</Card.Title>
                <Card.Text>
                 <p> Contact No:65839036274</p>
                  <p>Location : JP Nagar bengaluru,560078</p></Card.Text>
              
                
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img className="imagecss" variant="top" src={logo13} />
              <Card.Body>
                <Card.Title>Shivashakthi Mahila</Card.Title>
                <Card.Text>
                 <p> Contact No:8734903024</p>
                  <p>Location : Uttarahalli bengaluru,560077</p></Card.Text>
              
              
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
     
    </>
  )
}
export default Ngopartner;



















