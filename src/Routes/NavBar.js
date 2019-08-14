import React, { Component } from "react";
import{Navbar , Nav}  from 'react-bootstrap'

class NavBar extends Component {


render() {
  return (
    <div style={{}}>
        <Navbar  variant="light">
            <Navbar.Brand href="/home">Numbers Knowledge</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/math">Math</Nav.Link>
                <Nav.Link href="/trivia">Trivia</Nav.Link>
                <Nav.Link href="/date">Date</Nav.Link>
                <Nav.Link href="/year">Year</Nav.Link>
            </Nav>
        </Navbar>
    </div>
    );
  }
}

export default NavBar;