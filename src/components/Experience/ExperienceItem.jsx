import React, {PropTypes} from 'react';
import Accomplishments from './Accomplishments.jsx';
import '../../styles/workobjects.css';

const ExperienceItem = ({company, location, position, time, accomplishments}) => (
	<div className="space-bottom">
		<h4 className="title">{position}, {company}</h4>
		<span className="location">{location}</span>
		<span className="date">{time}</span>
		<hr className="thin"/>
		<Accomplishments list={accomplishments}/>
	</div>
);

ExperienceItem.PropTypes = {
	position: React.PropTypes.string.isRequired,
	company: React.PropTypes.string.isRequired,
	time: React.PropTypes.string.isRequired,
	location: React.PropTypes.string.isRequired,
	accomplishments: React.PropTypes.array.isRequired
};

export default ExperienceItem;
