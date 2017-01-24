import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App/App.jsx';
import Bio from './components/Bio/Bio.jsx';
import Contact from './components/Contact/Contact.jsx'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Bio}/>
		<Route path="contact" component={Contact}/>
	</Route>
);
