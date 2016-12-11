"use strict"

const React = require('react');
const FontAwesome = require('react-fontawesome')

const { aGround, overlay, title, description, paragraph, footer, github, linkedIn } = require('./styles')
const About = require('./about-me')


const AboutPage = React.createClass({
  getInitialState() {
    return {
      submission: { id:'', name:'', email:'', message:''}
    }
  },

  setFormState(event){
    var field = event.target.name;
    var value = event.target.value;
    this.state.submission[field] = value;
    return this.setState({submission: this.state.submission})
  },

  render() {
    return (
      <About
        submission={this.state.submission}
        onChange={this.setFormState} />
    )
  }
})

module.exports = AboutPage;
