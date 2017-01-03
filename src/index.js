
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './favicon.ico';

render(
  <App/>, document.getElementById('app')
);
