"use strct"

const React = require('react');

const { aGround, overlay, titleF, description, paragraph, footer, inputStyle } = require('./styles')
const Input = require('./text-input')

const ContactForm = React.createClass({
  render () {
    return(
      <div className="container-fluid" style={aGround}>
        <form>
          <div style={titleF}>
            <h3>I'D LIKE TO HEAR FROM YOU</h3>
            <h6 style={{color:'rgb(61,61,61)'}}>Coffee, a proposal, or inquiry</h6>
          </div>
          <div style={description}>
            <Input
              label="Name"
              name="name"
              placeholder="Name"
              onChange={this.props.onChange}
              value={this.props.submission.name} />

              <Input
                label="Email"
                name="email"
                placeholder="Email"
                onChange={this.props.onChange}
                value={this.props.submission.email} />

            <label htmlFor="message">Your Message</label>
            <textarea type="text"
              name="message"
              className="form-control"
              placeholder="Your Message..."
              ref="message"
              style={inputStyle}
              value= {this.props.submission.message}
              onChange={this.props.onChange} >
            </textarea>
            <br />

            </div>
            <div style={footer}>
              <input type="submit" value="SEND MESSAGE" className="btn btn-default"
              id="btn-submit" />
            </div>
        </form>
      </div>
    )
  }
})


module.exports = ContactForm
