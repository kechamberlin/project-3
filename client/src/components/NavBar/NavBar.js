import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "./ag-law.jpg";
import Card from "react-bootstrap/Card";
import "./NavBar.css";

function MyNav() {
    return (
        <Navbar className="navBorder" bg="light" expand="lg">

            {/* Insert logo image in place of React-Bootstrap text */}
            <a href="#">
                <img className="logo"  src={Logo} alt="logo" />
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* Remember to replace with appropriate text */}
                    <Nav.Link className="navFont" href="#">Home</Nav.Link>
                    <Nav.Link className="navFont" href="#">About Me</Nav.Link>
                    <Nav.Link className="navFont" href="#">Areas of Practice</Nav.Link>
                    <Nav.Link className="navFont" href="#">Recent Cases</Nav.Link>
                    <Nav.Link className="navFont" href="#">Associate Attorneys</Nav.Link>
                    <Nav.Link className="navFont" href="#">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Card>
                <Card.Body className="navContact">
                            615 13th Street, Suite A, Modesto, CA 95354 <br></br> 
                            Phone | 209-502-6341  <br></br> 
                            Fax | 209-502-6361
                </Card.Body>
            </Card>
        </Navbar>
    );
}

export default MyNav;