import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="warning" variant="dark">
  <ReactBootStrap.Navbar.Brand href="/" className="px-5"> Rick and Morty <span className="text-primary">Character</span></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className=" d-flex  mr-auto mx-5 px-5"> 
            <ReactBootStrap.Nav className=" mr-auto mx-5 px-5">
              <ReactBootStrap.Nav className=" mr-auto mx-5 px-5">
                <ReactBootStrap.Nav className=" mr-auto mx-5 px-5">
                    <ReactBootStrap.Nav className=" mr-auto mx-5 px-5">
                <Link to="/locations">
                <ReactBootStrap.Nav.Link href="/locations">Locations</ReactBootStrap.Nav.Link>
                </Link>
                    </ReactBootStrap.Nav>
                   </ReactBootStrap.Nav>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Nav>
        </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;