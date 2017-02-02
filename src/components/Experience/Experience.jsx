import React from 'react';
import ExperienceItem from './ExperienceItem.jsx';
import experience from './work-experience.json';

export default class Experience extends React.Component {
	constructor(props) {
		super(props);
		this.state = experience;
	}

	render() {
		return (
			<div className="body container">
				{this.state.experience.map((work, index) => <ExperienceItem key={index} company={work.company} location={work.location} position={work.position} time={work.time} accomplishments={work.accomplishments}/>)}
			</div>
		);
	}
}
