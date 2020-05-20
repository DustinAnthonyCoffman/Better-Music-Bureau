import React, { Component } from 'react';

//bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Jumbotron, NavDropdown, Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './App.css';

//Components
import Index from './Components/Index';
import About from './Components/About';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <>
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Better Music Bureau</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Reviews" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/reviews">Recent</NavDropdown.Item>
                <NavDropdown.Item href="/genre">Genre</NavDropdown.Item>
                <NavDropdown.Item href="/artist">Artist</NavDropdown.Item>
                <NavDropdown.Item href="/venue">Venue</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className='container-fluid'>
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
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
