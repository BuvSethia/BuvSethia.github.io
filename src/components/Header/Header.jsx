import React, {PropTypes} from 'react';
import Contact from '../Contact/Contact.jsx';
import '../../styles/header.css'

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="">
				<h1 className="text-center">
					Sumbhav Sethia
				</h1>
				<Contact/>
				<hr className="separator"/>
			</div>
		);
	}
}

Header.PropTypes = {

};
