"use strict"

const React = require('react');
const FontAwesome = require('react-fontawesome')

const { aGround, overlay, title, description, paragraph, footer, github, linkedIn } = require('./styles')

const AboutPage = React.createClass({
  render() {
    return (
      <div className="container-fluid" style={aGround}>
        <div style={title}>
          <h3>Farook Khan</h3>
          <h6>Development & Design</h6>
        </div>
        <div style={description}>
          <h4>About Me</h4>
          <p style={paragraph}>I was born in Italy to Pakistani parents, and raised in Tunisia, Scotland, Canada, and the US. As an adult, I’ve lived and worked in Tanzania, South Africa, and Jamaica, and the US.</p>
          <p style={paragraph}>Since 2010, I’ve had the privilege of working with a visionary team seeking to accelerate the weaving together of our global fabric through education, technology, and innovation.</p>
          <p style={paragraph}>Today, I am further developing the quality of my service by learning modern and cutting edge technologies, while building websites, applications, and other technical solutions. </p>
        </div>
        <div style={footer}>
            <a href="https://github.com/farookkhan" style={github}>
              <FontAwesome
                name='github'
                size='3x' />
            </a>
            <a href="https://www.linkedin.com/in/farook-khan-developer" style={linkedIn}>
              <FontAwesome
                name='linkedin'
                size='3x' />
            </a>
        </div>
        <div style={overlay}></div>
      </div>
    )
  }
})

module.exports = AboutPage;
