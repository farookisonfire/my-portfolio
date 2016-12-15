"use strict"

const React = require('react');
const { Link } = require('react-router');
const { navbarTitle, navbarStyle } = require('./styles');
const { Navbar, Nav, NavItem } = require('react-bootstrap');
const { LinkContainer } = require('react-router-bootstrap');


const MyNavBar = React.createClass({

  render() {
    return (

      <Navbar collapseOnSelect style={navbarStyle}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" style={navbarTitle}>Farook Khan ¬ Full-Stack Development</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/about">
              <NavItem eventKey={1}>About</NavItem>
            </LinkContainer>
              <NavItem eventKey={2} href="https://github.com/farookkhan">Github</NavItem>
            <LinkContainer to="https://www.linkedin.com/in/farook-khan-developer">
              <NavItem eventKey={3}>LinkedIn</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem eventKey={4}>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
})

module.exports = MyNavBar;
