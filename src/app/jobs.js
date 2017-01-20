import React, {Component} from 'react';

import {Job} from './job';

export class Jobs extends Component {
	constructor() {
		super();
		this.state = {jobs: []};
		this.jobMatch = this.jobMatch.bind(this);
	}

	jobMatch(job, filter) {
		console.log('jobmatch', job, filter);
		for (let skill of job.skills) {
			if (skill.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
				console.log('skillmatch', skill, skill.indexOf(filter), filter);
				return true;
			}
		}

		if (job.text.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
			return true;
		}

		return false;
	}

	render() {
		let rows = [];
		this.props.jobs.map(job => {
			if (this.props.filter && !this.jobMatch(job, this.props.filter)) {
				return false;
			}
			rows.push(<Job key={job.key} job={job} search={this.props.search}/>);
			return true;
		});
		return (
			<div>
				<h2>
					Recent Jobs
				</h2>
				<div>
					{rows}
				</div>
			</div>
		);
	}
}

Jobs.propTypes = {
	jobs: React.PropTypes.object.isRequired,
	filter: React.PropTypes.object.isRequired,
	search: React.PropTypes.object.isRequired
};
