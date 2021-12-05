import React,{ useState} from 'react'
import '../App.css'
import { Link } from "react-router-dom";


const Navbar = ({url}) =>{
    const [showLinks,setShowLinks] = useState(false);
    return (
        <>
        <div className="Navbarr">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <Link to="/donor" className="link">DONORDASH</Link>
                    <Link to ={`${url}/Event`} className="link">EVENTS</Link>
                    <Link to={`${url}/Points`} className="link">POINTS</Link>
                    <Link to={`${url}/History`} className="link">HISTORY</Link>
                    <Link to ={`${url}/Profile`} className="link">PROFILE</Link>
                    <Link to ={`${url}/Registration`} className="link">Registration</Link>
                </div>
                <button className="button" onClick={() => setShowLinks(!showLinks)}>⫸</button>
            </div>
            <div className="rightSide">
                <div className="links"> 
                    <Link to ="/" className="link">LOGOUT</Link>
                </div>
            </div>
        </div>
        </>
            
    )
}

export default Navbar;
