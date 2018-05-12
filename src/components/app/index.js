import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import { muiTheme } from './../../style/material-ui.js';

import NavBar from './../navbar';
import Homepage from './../homepage';
import RoverContainer from './../rover-container';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='*' component={NavBar} />
          <Route exact path='/' component={Homepage} />
          <Route path='/rover/:roverId' component={RoverContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

// export default muiTheme()(App);