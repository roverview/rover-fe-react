import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './style/main.scss';
import NavBar from './components/navbar';
import Homepage from './components/homepage';

class App extends Component {
  render() {
    return <BrowserRouter>
      <div>
        <Route path='*' component={NavBar} />
        <Route exact path='/' component={Homepage} />
      </div>
    </BrowserRouter>;
  }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);