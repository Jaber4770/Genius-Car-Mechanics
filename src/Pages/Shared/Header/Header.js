import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="white" className='border' sticky="top">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home">
                        <img className='width' src="https://i.ibb.co/d2Nt3GJ/favicon-1.jpg" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/Contact">Contact</Nav.Link>
                        {user?.email
                            ? <div>
                                <Navbar.Text>
                                    Signed in as: <a href="#Login">{user?.displayName}</a>
                                </Navbar.Text>
                                <button onClick={logOut}>LogOut</button>
                            </div>
                            :
                            <Nav.Link as={HashLink} to="/login">Log In</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;