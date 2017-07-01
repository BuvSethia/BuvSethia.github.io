import React from 'react';
import bio from './bio.json';
import biopic from '../../assets/biopic.jpg';

export default class Bio extends React.Component {
	constructor(props) {
		super(props);
		this.state = bio;
	}

	render() {
		return (
			<div className="body container">
				<img className="biopic" src={biopic} title="John Lennon Wall in Prague!"/>
				{this.state.paragraphs.map((paragraph, index) =>
						<p key={index}>{paragraph}</p>
				)}
			</div>
		)
	}
}
