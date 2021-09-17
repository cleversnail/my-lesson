import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home'
import Signin from './pages/signin'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container" style={{overflow: 'hidden'}}>
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/signin" component={Signin} />
          </Router>
        </div>
      </Fragment>
    );
  }
}
