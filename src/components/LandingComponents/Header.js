import React from 'react';
import { useEffect, useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";
import { AccordionButton } from "react-bootstrap";


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
{/*         //https://image.shutterstock.com/image-vector/minimalist-simple-modern-ocean-sun-260nw-1892993923.jpg
 */}          
        <Link to="/"><img className="navv-logo1" src="https://lh3.googleusercontent.com/pw/AM-JKLW2LNuUZnvuejSFRd7E2tlyhrIj3I4InHj-02DCCYm20V_fCNLgl4ffvKGze5i81VSlf334LDlEuFySpnhqqYUOVLDlaXycLKe29PGI4bhde_wzZ17HUQdqMVxlnWppu0SBM3gQYRavRJKtf1cHUC_I2Q=w265-h264-no"
        width="30px" margin-right="10px" alt="React Bootstrap logo"/>
        </Link>
        <Link to="/"><Navbar.Brand href="">QUAD</Navbar.Brand></Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#foo">Team</Nav.Link>

            <NavDropdown title="Project">
              <NavDropdown.Item className="nav-link">
                  <Link to="/projects">Support Project</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link">
                  <Link to="/form">List Project</Link>
              </NavDropdown.Item>
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