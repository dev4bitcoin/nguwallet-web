import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

import logo from "../assets/icon.png";

const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <div className="inline-block">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt=""
                        />
                        <div className="inline-block text">NguWallet</div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >

                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="justify-content-end">
                        <a href="/" className="inline-block nav-tag">Home</a>
                        <a href="/demo" className="inline-block nav-tag">Demo</a>
                        {/* <a href="/support" className="inline-block nav-tag">Support</a> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default NavBar;