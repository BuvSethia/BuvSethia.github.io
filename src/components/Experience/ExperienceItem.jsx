import React, {PropTypes} from 'react';
import Accomplishments from './Accomplishments.jsx';
import '../../styles/experience.css';

const ExperienceItem = ({company, location, position, time, accomplishments}) => (
	<div className="space-bottom">
		<h4 className="title">{position}, {company}</h4>
		<span className="date">{time}</span>
		<h5 className="location">{location}</h5>
		<Accomplishments list={accomplishments}/>
	</div>
);

ExperienceItem.PropTypes = {
	position: React.PropTypes.string.isRequired,
	company: React.PropTypes.string.isRequired,
	time: React.PropTypes.string.isRequired,
	location: React.PropTypes.string.isRequired,
	accomplishments: React.PropTypes.string.array,
};

export default ExperienceItem;
