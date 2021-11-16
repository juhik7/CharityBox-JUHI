import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    Nav,
    NavbarBrand
} from 'reactstrap';
import { Link } from "react-router-dom";
//<NavLink href="/admin">Admin Dashboard</NavLink>
const Header = ({url}) =>{
    const [isOpen, setIsOpen] = React.useState(false);
    return(
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">CharityBox</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/admin">Admin Dashboard</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/donor">Donor Dashboard</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/ngoVol">NGO Dashboard</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/ngoVol">Volunteer Dashboard</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
};

export default Header;