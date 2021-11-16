import React from "react";
import NavbarComp from'./VolNgo/Navbar';
import pushNotification from "./pushNotification";

const NVDash = () => {
    return(
        <div className="App">
        <NavbarComp/>
        <pushNotification/>      
        </div>
    );
};

export default NVDash;