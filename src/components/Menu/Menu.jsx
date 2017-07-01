import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import '../../styles/menu.css';
import resume from '../../assets/sethia-resume.pdf';

const Menu = (props) => (
	<div className="menu">
		<IndexLink to="/" activeClassName="active">Bio</IndexLink>
		<Link to="/experience" activeClassName="active">Experience</Link>
		<Link to="/projects" activeClassName="active">Projects</Link>
		<a href={resume} download>Resume</a>
	</div>
);

export default Menu;
