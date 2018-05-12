import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import appCreateStore from './lib/app-create-store.js';

import './style/main.scss';
import App from './components/app';

import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { darkBlack, grey600 } from 'material-ui/colors/grey';

const store = appCreateStore();

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Avenir',
    ],
  },
  palette: {
    primary: darkBlack,
    secondary: grey600,
  },
});

class Root extends Component {
  render() {
    return(
      <main>
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <App />
          </MuiThemeProvider>
        </Provider>
      </main>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));