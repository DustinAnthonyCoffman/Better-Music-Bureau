import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Jumbotron, NavDropdown, Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

import {Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Better Music Bureau</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <NavDropdown title="Reviews" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Genre</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Artist</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Venue</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron className='text-center'>
          <h1>Hello World</h1>
        </Jumbotron>
      <Container className='container-fluid'>
        <Row>
          <Col>
            <h1>Hey</h1>
          </Col>
          <Col>
            <h1>Hey</h1>
          </Col>
          <Col>
            <h1>Hey</h1>
          </Col>
        </Row>
      </Container>

      </>
    )
  }
}


export default App;
