"use strict"

const React = require('react');
const POneWelcome = require('./project-pages/p1-welcome')
const PTwoWelcome = require('./project-pages/p2-welcome')
const { titleWelcome } = require('./styles')

const Welcome = React.createClass({
  render() {
    return(
      <div className="container">
        <h3 style={titleWelcome}>Selected Projects</h3>
        <POneWelcome />
        <br />
        <PTwoWelcome />
      </div>
    );
  }
});

module.exports = Welcome;
