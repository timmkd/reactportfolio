import React, {Component} from 'react';

import {Job} from './job';

export class Jobs extends Component {
	constructor() {
		super();
		this.state = {jobs: []};
	}

	render() {
		return (
			<div>
				<h2>
					Worked with all these awesome technologies:
				</h2>
				<div>
					{this.props.jobs.map((job, i) => (
						<Job key={i} job={job}/>
					))}
				</div>
			</div>
		);
	}
}

Jobs.propTypes = {
	jobs: React.PropTypes.object.isRequired
};
