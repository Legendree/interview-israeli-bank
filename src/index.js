import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Browser } from 'react-router-dom';

import './styles/reset.min.css';
import './styles/global.css';

import App from './App';

ReactDOM.render(
  <Browser>
    <App />
  </Browser>,
  document.getElementById('root')
);
