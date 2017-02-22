import React, {PropTypes} from 'react';
import ProjectsItem from './ProjectsItem.jsx';
import projects from './my-projects.json';

export default class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = projects;
	}

	render() {
		return (
			<div className="body container">
				{this.state.projects.map((project, index) => <ProjectsItem key={index} title={project.title} technologies={project.technologies} link={project.link} time={project.time} source={project.source} description={project.description} highlights={project.highlights}/>)}
			</div>
		);
	}
}
