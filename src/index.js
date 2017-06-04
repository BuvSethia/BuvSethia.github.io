
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/favicon.ico';
import './styles/common.css';
import './index.html';

render(
  <Router history={browserHistory} routes={routes}/>, document.getElementById('app')
);
