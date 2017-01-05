import React, {PropTypes} from 'react';
import ghlogo from '../../assets/gh.png';
import emaillogo from '../../assets/email.png';
import lilogo from '../../assets/li.png';
import '../../styles/header.css'

const Contact = (props) => (
	<div className="smallpadding text-center">
		<a href="mailto:sumbhav.sethia@gmail.com">
			<img className="linkpadding contactimage" src={emaillogo}/>
		</a>
		<a href="http://www.github.com/BuvSethia" target="_blank">
			<img className="linkpadding contactimage" src={ghlogo}/>
		</a>
		<a href="http://www.linkedin.com/in/sumbhavsethia" target="_blank">
			<img className="linkpadding contactimage" src={lilogo}/>
		</a>
	</div>
);

Contact.PropTypes = {

};

export default Contact;
