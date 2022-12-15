import React from 'react'

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Navigation = () => {
    const coffee = <FontAwesomeIcon icon={faCoffee} />
  return (
        <>
            <header>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <NavLink to='/'> {coffee} Better Music Bureau</NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink to='/' style={({isActive}) => { return isActive ? {color: 'red'} : {} }}>
                                    Home
                                </NavLink>
                                <NavLink to='about' style={({isActive}) => { return isActive ? {color: 'red'} : {} }}>
                                    About
                                </NavLink>
                                <NavLink to='contact' style={({isActive}) => { return isActive ? {color: 'red'} : {} }}>
                                    Contact
                                </NavLink>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
  )
}
