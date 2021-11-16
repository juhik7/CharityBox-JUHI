import React from "react";
//import { Button } from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import firebase from "firebase";
import "./juhi.css"
//import firebase from "../firebase";
import PushNotification from '../pushNotification';
import logo192 from "../../src/VolNgo/image/vol.jpg"
import logo193 from "../../src/VolNgo/image/vol2.jpg"
import logo194 from "../../src/VolNgo/image/vol.gif"
import logo195 from "../../src/VolNgo/image/volslide.jpg"
import logo196 from "../../src/VolNgo/image/v2.png"
import logo197 from "../../src/VolNgo/image/vol.gif"
import RequestMsg from "./request";
import 'antd/dist/antd.css';
import { Card } from 'antd';

import { Routes, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";

const { Meta } = Card;

function Subscribe() {
  const msg = firebase.messaging();
  msg.requestPermission().then(() => {
    return msg.getToken();
  }).then(volunteerToken => {
    alert("Notification is on");
    let Token = firebase.database().ref().child('volunteerToken').child(volunteerToken);
    Token.set(volunteerToken);
  })
}
function Volunteer() {
  return (
    <div className="container-fluid myBlock"><Router>
      {/* <div style={{ backgroundImage: "url(/card_go.jpg)" }}>*/}
      <div className="heading">
        <h1>Become a Volunteer</h1>
        <h4>We provide our volunteers the opportunity to grow through selfless action. You can contribute in any of the below ways –

        </h4>
      </div>

      <div className="heading">
        <h4>
          Use your talents to spread happiness ?
        </h4>
      </div>

      <div className="heading">
        <h3>Whatever talent you have, we are sure you can somehow make use of it to spread happiness with us ? !!</h3>
        <p>Write to us at</p>
        <a as={Link} to={"/RequestMsg"}>RequestMsg</a><p> with your resume mentioning what type of volunteering opportunities you are looking for. Keep the subject line as “Volunteer: name,skillset”. Happy Volunteering ?</p>

      </div><br/>
      <div className="container">
        <Row >
          <div className="col-4 ">
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={logo192}/>}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
          </div>
          <div className="col-4 ">
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={logo192}/>}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
          </div>
          <div className="col-4 ">
          <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={logo192}/>}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
          </div>
          {/* <div className="col-4 myBlock2">
            <Card style={{ width: '18rem' }}>
              <Card.Img className="imagecss" variant="top" src={logo192} />
              <Card.Body>
                <Card.Title>POST PHOTOGRAPH</Card.Title>
                <Card.Text>
                  If you are a photographer, you can make our special kids happy. They sooooooo love posing and getting clicked.
                </Card.Text>
                <Button variant="primary">ADD</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4 myBlock2">
            <Card style={{ width: '18rem' }}>
              <Card.Img className="imagecss" variant="top" src={logo194} />
              <Card.Body>
                <Card.Title>POST ANIMATION</Card.Title>
                <Card.Text>
                  If you are creative and good at animations, you can make small animated videos that motivate people to donate for the cause.
                </Card.Text>
                <Button variant="primary">ADD</Button>
              </Card.Body>
            </Card>
  </div>*/}
        </Row>
      </div>
      <div className="container">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="i"
              src={logo195}
              alt="First slide"
            />
            <Carousel.Caption className="d">
              
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="i"
              src={logo196}
              alt="Second slide"
            />

            <Carousel.Caption className="d">
              
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="i"
              src={logo197}
              alt="Third slide"
            />

            <Carousel.Caption className="d">
              
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>

        <button onClick={Subscribe}>get notification</button>
      </div>
      <div>
        <Switch>
          <Route path="/RequestMsg">
            <RequestMsg />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  )
}

export default Volunteer;