import React from 'react';
import {Navbar, Nav, Container,NavDropdown} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

  /*
   <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="warning" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#" className="px-5"> Rick and Morty <span className="text-primary">Character</span></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className=" d-flex  mr-auto mx-5 px-5"> 
            <ReactBootStrap.Nav className=" mr-auto mx-5 px-5">
              <ReactBootStrap.Nav className=" mr-auto mx-5 px-5">
                <ReactBootStrap.Nav className=" mr-auto mx-5 px-5">
                    <ReactBootStrap.Nav className=" mr-auto mx-5 px-5">
                <Link to="/">
                   <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
                </Link>
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
  */

const NavBar = () => {
    return(
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Rick and Morty <span className = "text-warning">Character </span></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
       
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/locations">Locations</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
       
    )
}

export default NavBar;