import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import appCreateStore from './lib/app-create-store.js';

import './style/main.scss';
import NavBar from './components/navbar';
import Homepage from './components/homepage';

let store = appCreateStore();

class App extends Component {
  render() {
    return(
      <main>
        <Provider store={store}>
          <Homepage />
        </Provider>
      </main>
    );
  }
}

// {/* <BrowserRouter> */}
// <Route path='*' component={NavBar} />
// <Route exact path='/' component={Homepage} />

let root = document.getElementById('root');
ReactDOM.render(<App />, root);