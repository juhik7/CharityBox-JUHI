import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import Navbar from "./Navbar";
import Event from "./Event";
import Points from "./Points";
import Profile from "./Profile"
import NotFound from "./NotFound";
import History from "./History";
import '../App.css'
const DonorDash = () =>{
    let {path} = useRouteMatch();
    return (
        <>
        <Navbar url={path} />
        <Switch>
            <Route exact path={"/donor"}>
                <h2>WELCOME TO CHARITY BOX</h2>
                <h2>ATISHAY JAIN</h2>
            </Route>
            
            <Route path={`${path}/Event`}>
                <Event />
            </Route>
            <Route path={`${path}/Points`}>
                <Points />
            </Route>
            <Route path={`${path}/History`}>
                <History />
            </Route>
            <Route path={`${path}/Profile`}>
                <Profile />
            </Route>
            <Route component={NotFound} />
        </Switch>
        </>
      )
};

export default DonorDash;