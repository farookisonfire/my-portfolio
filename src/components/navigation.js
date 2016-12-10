"use strict"

const React = require('react');

const NavBar = React.createClass({

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Farook Khan ¬ Full-Stack Development</a>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">About</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </div>
      </nav>
    )
  }
})

module.exports = NavBar;
