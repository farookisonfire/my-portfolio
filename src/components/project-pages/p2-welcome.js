"use strict"

const React = require('react');
const { imgStyle } = require('../styles')
const { Link } = require('react-router')

const PTwoWelcome = React.createClass({

  render() {
    return (
      <div>
        <Link to="project-two-landing">
          <img
          className="img-responsive"
          style={imgStyle}
          src="https://s3.amazonaws.com/portfolio-farook/macbook-2.jpg" />
        </Link>
      </div>
    );
  }
});

module.exports = PTwoWelcome;
