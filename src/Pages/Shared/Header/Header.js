import React from 'react';
import { Button, ButtonGroup, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth()
    return (
        <>
         <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">Genius</Navbar.Brand>
          <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
            <Nav.Link as={Link} to="/home#experts">Experts</Nav.Link>
           {
            user?.email?
            <Button onClick={logOut} variant="light">Light</Button>:
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
           }
          <Navbar.Text>
            Signed in as: <a href="#login">{user?.displayName}</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>        
        </>
    );
};

export default Header;


