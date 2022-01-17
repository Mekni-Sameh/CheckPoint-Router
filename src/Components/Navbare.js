import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap';

function Navbare() {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Movie Card</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Films</Nav.Link>
      <Nav.Link href="#features">Series</Nav.Link>
      <Nav.Link href="#pricing">Kids</Nav.Link>
    </Nav>
    </Container>
  </Navbar> 
        </div>
    )
}

export default Navbare


