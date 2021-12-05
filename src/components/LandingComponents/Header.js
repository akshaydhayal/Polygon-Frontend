import React from "react"

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
          <img className="navv-logo1" src="https://image.shutterstock.com/image-vector/minimalist-simple-modern-ocean-sun-260nw-1892993923.jpg"
        width="30px" margin-right="10px" alt="React Bootstrap logo"
          />
        <Navbar.Brand href="#home">Polygon</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#foo">Team</Nav.Link>
            <NavDropdown title="Project">
              <NavDropdown.Item href="#action/1">action 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">action 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">action 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4">action 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Button variant="dark" active>Users Login</Button>{' '}

          <Nav>
            <Nav.Link href="#deets"><Button variant="light" active>Button 1</Button></Nav.Link>
            <Nav.Link href="#deets"><Button variant="light" active>Button 2</Button></Nav.Link>
       </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
}
export default Header