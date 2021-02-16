import { createMuiTheme } from '@material-ui/core';

const globalTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#D0111B',
    },
  },
  typography: {
    subtitle2: {
      fontSize: '12px',
    },
  },
});

export default globalTheme;
