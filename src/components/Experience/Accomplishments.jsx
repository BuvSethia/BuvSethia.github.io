import React, {PropTypes} from 'react';

const Accomplishments = ({list}) => (
	<ul>
		{list.map((accomplishment, index) => <li key={index}>{accomplishment}</li>)}
	</ul>
);

Accomplishments.PropTypes = {

};

export default Accomplishments;
