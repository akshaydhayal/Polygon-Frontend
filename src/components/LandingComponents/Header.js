import React from "react"
import { useEffect, useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate, Link } from "react-router-dom";

function Header() {

  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!")
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  }

  const connectWalletHandler = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err)
    }
  }

    const connectWalletButton = () => {
    return (
      <Button variant="primary" active onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet</Button>
    )
  }

    useEffect(() => {
    checkWalletIsConnected();
  }, [])

    return (
        <Navbar bg="dark" variant="dark">
          <Link to="/"><img className="navv-logo1" src="https://image.shutterstock.com/image-vector/minimalist-simple-modern-ocean-sun-260nw-1892993923.jpg"
        width="30px" margin-right="10px" alt="React Bootstrap logo"/>
        </Link>
        <Link to="/"><Navbar.Brand href="">Polygon</Navbar.Brand></Link>
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
          
          <Button variant="light" style={{margin: '10px'}} active>Users Login</Button>{' '}

         {/*  <Nav>
            <Nav.Link href="#deets"><Button variant="light" active>Button 1</Button></Nav.Link>
            <Nav.Link href="#deets"><Button variant="light" active>{connectWalletButton()}</Button></Nav.Link>
       </Nav> */}

        </Navbar.Collapse>

       <div>{currentAccount ? <Button style={{color: "white"}}>Wallet Connected!</Button> : connectWalletButton()}</div>

      </Navbar>
    )
}
export default Header