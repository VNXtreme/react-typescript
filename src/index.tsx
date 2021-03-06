import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import globalTheme from 'components/GlobalTheme';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={globalTheme}>
      {/* apply Normalize.css */}
      <CssBaseline />

      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
