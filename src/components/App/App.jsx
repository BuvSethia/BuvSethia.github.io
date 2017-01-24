import React, {PropTypes} from 'react';
import Header from '../Header/Header.jsx';
import Contact from '../Contact/Contact.jsx';
import Menu from '../Menu/Menu.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid">
				<Header/>
				<Menu/>
				{this.props.children}
			</div>
		);
	}
}

App.PropTypes = {

};
