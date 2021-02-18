import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Browser } from 'react-router-dom';

import './styles/reset.min.css';
import './styles/global.css';

import App from './App';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Browser>
      <App />
    </Browser>
  </Provider>,
  document.getElementById('root')
);
