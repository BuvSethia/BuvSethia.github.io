import React, {PropTypes} from 'react';
import ghlogo from '../../assets/gh.png';
import emaillogo from '../../assets/email.png';
import lilogo from '../../assets/li.png';
import '../../styles/header.css'

const Contact = (props) => (
	<div className="smallpadding text-center">
		<a href="mailto:sethia.sumbhav@gmail.com">
			<img className="linkpadding contactimage roundimage" src={emaillogo} title="sethia.sumbhav@gmail.com"/>
		</a>
		<a href="http://www.github.com/BuvSethia" target="_blank" title="github.com/BuvSethia">
			<img className="linkpadding contactimage" src={ghlogo}/>
		</a>
		<a href="http://www.linkedin.com/in/sumbhavsethia" target="_blank" title="linkedin.com/in/sumbhavsethia">
			<img className="linkpadding contactimage" src={lilogo}/>
		</a>
	</div>
);

Contact.PropTypes = {

};

export default Contact;
