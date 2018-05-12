import { createMuiTheme } from 'material-ui/styles';
import { darkBlack, grey600 } from 'material-ui/colors/grey';
import orbitron from 'typeface-orbitron';

export const muiTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Avenir',
      'orbitron',
    ].join(','),
    display1: {
      fontFamily: 'orbitron',
    },
    display2: {
      fontSize: '1.15em',
      fontWeight: 400,
      color: '#FFF',
    },
    display3: {
      fontSize: '1.10em',
      fontWeight: 300,
      color: '#000',
    },
    display4: {
      fontSize: '1.15em',
      fontWeight: 600,
      color: '#000',
    },
  },
  palette: {
    primary: darkBlack,
    secondary: grey600,
  },
});
