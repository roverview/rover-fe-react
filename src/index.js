import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import appCreateStore from './lib/app-create-store.js';

import './style/main.scss';
import App from './components/app';

import { muiTheme } from './style/material-ui.js';
import { MuiThemeProvider } from 'material-ui/styles';

const store = appCreateStore();

if (process.env.NODE_ENV === 'development') {
  const a11y = require('react-a11y').default;
  a11y(React, ReactDOM, {
    rules: {
      'aria-role': 'warn',
      'img-uses-alt': 'warn',
      'img-redundant-alt': 'warn',
      'onclick-uses-role': 'warn',
    },
  });
}

class Root extends Component {
  render() {
    return <main>
      <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
          <App />
        </MuiThemeProvider>
      </Provider>
    </main>;
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));