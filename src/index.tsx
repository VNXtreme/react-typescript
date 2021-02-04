import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './modules/store';
import GlobalStyle from './components/GlobalStyle';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root'),
);
