const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, hashHistory } from 'react-router'

import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory()

const NavBar = require('./components/navigation');
const About = require('./components/about');

// testing connection to server
fetch('/api/data')
  .then(res => {
    return res.json()
  }).then(res => {
    console.log(res)
  })

// first component
const App = React.createClass({
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <h2>Welcome, to the real world</h2>
        </div>
        {this.props.children}
      </div>
    )
  }
});

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>

    </Route>
    <Route path="/about" component={About} />
  </Router>
), document.getElementById('app'))
