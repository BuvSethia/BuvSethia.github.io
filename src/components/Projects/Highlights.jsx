import React, {PropTypes} from 'react';

const Highlights = ({highlights}) => (
	<ul>
		{highlights.map((highlight, index) => <li key={index}>{highlight}</li>)}
	</ul>
);

Highlights.PropTypes = {

};

export default Highlights;
