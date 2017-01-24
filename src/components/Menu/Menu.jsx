import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import '../../styles/menu.css';

const Menu = (props) => (
	<div className="menu">
		<IndexLink to="/" activeClassName="active">Bio</IndexLink>
		<br/>
		<Link to="/contact" activeClassName="active">Contact</Link>
	</div>
);

export default Menu;
