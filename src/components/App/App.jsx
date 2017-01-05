import React, {PropTypes} from 'react';
import Header from '../Header/Header.jsx';
import Contact from '../Contact/Contact.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="">
				<Header/>
				Random body text
			</div>
		);
	}
}

App.PropTypes = {

};
