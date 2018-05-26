import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './../navbar';
import Homepage from './../homepage';
import RoverContainer from './../rover-container';
import AboutUs from '../about-us';
import Login from '../login';
import SignUp from '../signup';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='*' component={NavBar} />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={AboutUs} />
          <Route path='/rover/:roverId' component={RoverContainer} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </div>
      </BrowserRouter>
    );
  }
}

// export default muiTheme()(App);