const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory()

const NavBar = require('./components/navigation');
const About = require('./components/about');
const Welcome = require('./components/welcome');
const POneLanding = require('./components/project-pages/p1-landing');
const PTwoLanding = require('./components/project-pages/p2-landing');
const Footer = require('./components/footer');

// first component
const App = React.createClass({
  render() {
    return (
      <div>
        <NavBar />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
});

ReactDOM.render((
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="/project-one-landing" component={POneLanding} />
      <Route path="/project-two-landing" component={PTwoLanding} />
    </Route>
    <Route path="/about" component={About} />
    <Route path="/contact" component={About} />
  </Router>
), document.getElementById('app'))
