import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="white" className='border' sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='width' src="https://i.ibb.co/d2Nt3GJ/favicon-1.jpg" alt="" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home#home">Home</Nav.Link>
                        <Nav.Link href="/home#services">Services</Nav.Link>
                        <Nav.Link href="/home#About">About</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                        <Nav.Link href="/Login">Log In</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
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