"use strict"

const React = require('react');
const { projectLanding, titleWelcome } = require('../styles')

const POneLanding = React.createClass({
  render(){
    return(
      <div style={projectLanding} className="container">
        <h4 style={titleWelcome}>PROJECT 1 LANDING PAGE</h4>
      </div>
    );
  }
});

module.exports = POneLanding;
