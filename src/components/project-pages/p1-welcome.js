"use strict"

const React = require('react')
const { Link } = require('react-router')
const { imgStyle } = require('../styles')



const POneWelcome = React.createClass({

  render() {
    return (
      <div>
        <Link to="/project-one-landing">
          <img
            className="img-responsive"
            style={imgStyle}
            src="https://s3.amazonaws.com/portfolio-farook/macbook-1.jpg" />
        </Link>
      </div>
    );
  }
});

module.exports = POneWelcome
