import React, { useState } from 'react';
//import firebase from 'firebase';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import * as firebase from 'firebase/app';
import Ongoing  from './VolNgo/table';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from'./VolNgo/Navbar';
import Volunteer from './VolNgo/volunteer';
import pushNotification from "./pushNotification";
import { StylesContext } from '@material-ui/styles';
import AdminDash from "./Admin/AdminDash";
import Home from "./Home";
import NotFound from "./NotFound";
import NVDash from "./NVDash";
import DonorDash from './Donor/Donordash';
import NgoDash from './Ngo';
import NGORegistartion from './NGORegistration';
import VOLRegistration from './VOLRegistration';
const App=() =>{
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/admin">
          <AdminDash />
        </Route>
        <Route path="/donor">
          <DonorDash />
        </Route>
        <Route path="/volunteer">
          <NVDash />
        </Route>
        <Route path="/ngo">
          <NgoDash />
        </Route>
        <Route path="/NGOReg">
          <NGORegistartion />
        </Route>
        <Route path="/VOLReg">
          <VOLRegistration/>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
export default App;

/*import firebase from "./firebase";
function App() { 

  React.useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();                                
    }).then(token=>{
      console.log('Token:',token)
    }).catch(()=>{
      console.log('error');
    })
  })
  return (
    <div >
    </div>
  );
}

export default App;*/
