import React from 'react';
import ReactDOM from 'react-dom';
import { config } from '@fortawesome/fontawesome-svg-core';
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.getElementById('root')
);
