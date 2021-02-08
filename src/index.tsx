import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MenuAppBar from 'components/organismos/MenuAppBar';
import { ThemeProvider } from '@material-ui/core/styles';
import globalTheme from 'components/GlobalTheme';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './modules/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={globalTheme}>
      {/* apply Normalize.css */}
      <CssBaseline />

      <MenuAppBar />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
