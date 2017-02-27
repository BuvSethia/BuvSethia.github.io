import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import '../../styles/menu.css';

const Menu = (props) => (
	<div className="menu">
		<IndexLink to="/" activeClassName="active">Bio</IndexLink>
		<br/>
		<Link to="/experience" activeClassName="active">Experience</Link>
		<br/>
		<Link to="/projects" activeClassName="active">Projects</Link>
	</div>
);

export default Menu;
