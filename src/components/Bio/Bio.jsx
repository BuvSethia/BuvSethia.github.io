import React from 'react';
import bio from './bio.json';

export default class Bio extends React.Component {
	constructor(props) {
		super(props);
		console.log(bio);
		this.state = bio;
	}

	render() {
		return (
			<div className="body container">
				{this.state.paragraphs.map((paragraph, index) =>
						<p key={index}>{paragraph}</p>
				)}
			</div>
		)
	}
}
