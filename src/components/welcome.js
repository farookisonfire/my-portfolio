const React = require('react');


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
        <h1>Welcome, to the real world</h1>
      </div>
    )
  }
});

module.exports = Welcome;
