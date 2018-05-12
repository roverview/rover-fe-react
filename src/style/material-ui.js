import { createMuiTheme } from 'material-ui/styles';
import { darkBlack, grey600 } from 'material-ui/colors/grey';

export const muiTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Avenir',
    ],
    display2: {
      fontSize: '1.15em',
      fontWeight: 400,
      color: '#FFF',
    },
    display3: {
      fontSize: '1em',
      fontWeight: 300,
    },
    display4: {
      fontSize: '1em',
      fontWeight: 600,
    },
  },
  palette: {
    primary: darkBlack,
    secondary: grey600,
  },
});
