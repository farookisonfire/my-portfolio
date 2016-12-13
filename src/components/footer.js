"use strict"

const React = require('react');
const { footerStyle } = require('./styles')

const Footer = React.createClass({
  render() {
    return(
      <div className="container">
        <h6 style={footerStyle}>© 2016 Farook Khan </h6>
      </div>
    )
  }
})

module.exports = Footer;
