import React, {PropTypes} from 'react';
import Highlights from './Highlights.jsx';
import '../../styles/workobjects.css';

const ProjectsItem = ({title, technologies, link, time, source, description, highlights}) => (
	<div className="space-bottom">
		<h4 className="title">{title}</h4>
		<span className="location">{technologies}</span>
		<span className="date">{time}</span>
		<span className="links">
			<a href={link.url} target="_blank">{link.text}</a>
			{source &&
				<span>{"\t|\t"} <a href={source} target="_blank">View Source</a></span>
			}
		</span>
		<hr className="thin"/>
		<p>{description}</p>
		<h5></h5>
		<Highlights highlights={highlights}/>
	</div>
);

ProjectsItem.PropTypes = {
	title: React.PropTypes.string.isRequired,
	technologies: React.PropTypes.string.isRequired,
	time: React.PropTypes.string.isRequired,
	description: React.PropTypes.string.isRequired,
	highlights: React.PropTypes.array.isRequired,
	link: React.PropTypes.object.isRequired,
	source: React.PropTypes.string.isRequired
};

export default ProjectsItem;
