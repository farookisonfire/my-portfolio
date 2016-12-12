"use strict"

const React = require('react');
const FontAwesome = require('react-fontawesome')

const { aGround, overlay, title, description, paragraph, footer, github, linkedIn } = require('./styles')
const About = require('./about-me')
const ContactApi = require('../api/contact-api')
const toastr = require('toastr')
require('../../node_modules/toastr/build/toastr.css')

const AboutPage = React.createClass({
  getInitialState() {
    return {
      submission: { id:'', name:'', email:'', message:''},
      errors: {}
    }
  },

  setFormState(event){
    var field = event.target.name;
    var value = event.target.value;
    this.state.submission[field] = value;
    return this.setState({submission: this.state.submission})
  },

  submissionIsValid() {
    let formIsValid = true;
    this.state.errors = {}; //clear any previous errors.

    if(this.state.submission.name.length < 3) {
      this.state.errors.name='Name must be at least 3 characters.'
      formIsValid = false;
    }

    if(this.state.submission.email.indexOf('@') === -1) {
      this.state.errors.email='Invalid email address';
      formIsValid = false;
    }

    if(this.state.submission.message.length < 10) {
      this.state.errors.message='Message must be at least 10 characters';
      formIsValid = false;
    }

    this.setState({errors:this.state.errors});
    console.log('HELLO', formIsValid)
    return formIsValid
  },

  saveMessage(event) {
    event.preventDefault();
    // validation:
    if (!this.submissionIsValid()) {
      return;
    }

    ContactApi.saveContact(this.state.submission);
    this.setState({submission:{ id:'', name:'', email:'', message:''}})
    toastr.success('Thanks, your message was sent!')
  },

  render() {
    return (
      <About
        submission={this.state.submission}
        onChange={this.setFormState}
        onSend={this.saveMessage}
        errors={this.state.errors}
        />
    )
  }
})

module.exports = AboutPage;
