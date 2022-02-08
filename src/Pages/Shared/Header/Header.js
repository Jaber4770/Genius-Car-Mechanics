import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="white" className='border' sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home#home">
                        <img className='width' src="https://i.ibb.co/d2Nt3GJ/favicon-1.jpg" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/home#about">About</Nav.Link>
                        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/Login">Log In</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#Login">Jack</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;