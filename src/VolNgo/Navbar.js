import React,{Component} from "react";
import{Navbar,Nav,NavDropdown,Container,Form,Button} from 'react-bootstrap'
//import Background from './background';

import { Routes ,Route } from 'react-router-dom';
import Subscribe from "./volunteer";
import firebase from 'firebase';
import {
    BrowserRouter as Router,
    Switch,
    Link
  } from "react-router-dom";

import Ngopartner from "./ngopartner";
import Ourwork from "./ourwork";
import Ourstory from "./ourstory";
import Volunteer from "./volunteer";
import Personalquery from "./personalquery";
import Contact from "./contact";
import Ongoing from "./table";

export default class NavbarComp extends Component{
    render(){
      return(
          <Router>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          
   
  {/*  <Navbar.Brand href="#home">               we have 3 page that is handle by router and you click around on the different <Link>s, the router renders the matching <Route>.
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
      */}<Container> 
    <Navbar.Brand href="#home">Charity Box</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link as={Link} to={"/volunteer"}>VOLUNTEER</Nav.Link>
        <Nav.Link as={Link} to={"/ngopartner"}>NGO Partner</Nav.Link>
        
        
    
 
{      /*  <NavDropdown title="GET INVOLVED" id="collasible-nav-dropdown">
          <NavDropdown.Item as={Link} to={"/volunteer"}>Volunteer</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/ngopartner"}>NGO Partner</NavDropdown.Item>
          
      
       
         
        </NavDropdown>
       */}
        <NavDropdown title="CONTACT US" id="collasible-nav-dropdown">
          <NavDropdown.Item as={Link} to={"/contact"}>+91827398127</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/personalquery"}>Personal Query</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/Ongoing"}>table</NavDropdown.Item>
        
        
           </NavDropdown>
      
      </Nav>
      <Button onClick={Subscribe} variant="outline-success">Get notification</Button>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
  
  <div>
  <Switch>
        <Route path="/volunteer">                         
            <Volunteer />
        </Route> 
            <Route path="/ngopartner">
            <Ngopartner />
        </Route>
        <Route path="/personalquery">
            <Personalquery />
        </Route>
        <Route path="/Ongoing">
            <Ongoing />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        </Switch>
        </div>
        <div>
        <Switch>
      
        <Route path="/ourstory">
            <Ourstory />
        </Route>
        <Route path="/work">
            <Ourwork />
        </Route>
    </Switch>
   </div> </div>
  
   </Router>
  )
  }}