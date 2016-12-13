"use strict"

const React = require('react');
const { Link } = require('react-router')
const { navbarTitle, navbarStyle } = require('./styles')

const NavBar = React.createClass({

  render() {
    return (
      <div>
        <nav className="navbar navbar-default" style={navbarStyle}>
          <div className="container">
            <Link to="/" className="navbar-brand navbar-title" style={navbarTitle}>Farook Khan ¬ Full-Stack Development</Link>
            <ul className="nav navbar-nav navbar-right navbar-links">
              <li><Link to ="/about" activeStyle={{ color : 'dark-grey' }}>About</Link></li>
              <li><a href="https://github.com/farookkhan">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/farook-khan-developer">LinkedIn</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
})

module.exports = NavBar;
