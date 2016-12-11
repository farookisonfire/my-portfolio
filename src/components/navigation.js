"use strict"

const React = require('react');
import { Link } from 'react-router'

const NavBar = React.createClass({

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >Farook Khan ¬ Full-Stack Development</Link>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to ="/about" activeStyle={{ color : 'dark-grey' }}>About</Link></li>
            <li><a href="https://github.com/farookkhan">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/farook-khan-developer">LinkedIn</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </div>
      </nav>
    )
  }
})

module.exports = NavBar;
