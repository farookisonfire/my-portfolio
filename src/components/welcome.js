const React = require('react');
const NavBar = require('./navigation')


// testing connection to server
fetch('/api/data')
  .then(res => {
    return res.json()
  }).then(res => {
    console.log(res)
  })

// first component
const Welcome = React.createClass({
  render() {
    return (
      <div>
        <NavBar />
        <h1>Welcome, to the real world</h1>
      </div>
    )
  }
});

module.exports = Welcome;
