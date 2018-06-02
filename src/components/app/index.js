import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { tokenSet } from '../../actions/auth-actions.js';
import { userFetchRequest } from '../../actions/user-actions';

import NavBar from './../navbar';
import Homepage from './../homepage';
import RoverContainer from './../rover-container';
import AboutUs from '../about-us';
import Login from '../login';
import SignUp from '../signup';
import FavoritesContainer from '../favorites-container';

class App extends Component {
  componentWillMount() {
    let localId = localStorage.roverviewId;
    let localToken = localStorage.roverviewToken;

    if (localToken && localId) {
      this.props.tokenSet(localToken);
      this.props.userFetch(localId);
    }
  }

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
          <Route exact path='/favorites' component={FavoritesContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  tokenSet: token => dispatch(tokenSet(token)),
  userFetch: user => dispatch(userFetchRequest(user)),
});

export default connect(null, mapDispatchToProps)(App);