"use strict"

const React = require('react');
const { projectLanding, titleWelcome } = require('../styles')


const PTwoLanding = React.createClass({
  render() {
    return (
      <div style={projectLanding} className="container">
        <h4 style={titleWelcome}>PROJECT TWO LANDING PAGE</h4>
      </div>
    );
  }
});

module.exports = PTwoLanding;
