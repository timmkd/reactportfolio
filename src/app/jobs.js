import React, {Component} from 'react';

import {Job} from './job';

export class Jobs extends Component {
	constructor() {
		super();
		this.state = {
			display: 'list'
		};
		this.jobMatch = this.jobMatch.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	jobMatch(job, filter) {
		for (let skill of job.skills) {
			if (skill.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
				return true;
			}
		}

		if (job.text.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
			return true;
		}

		return false;
	}

	handleToggle(display) {
		this.setState({display});
	}

	render() {
		let rows = [];
		let displayClass = 'jobs jobs--display-' + this.state.display;
		this.props.jobs.map(job => {
			if (this.props.filter && !this.jobMatch(job, this.props.filter)) {
				return false;
			}
			rows.push(<Job key={job.key} job={job} search={this.props.search}/>);
			return true;
		});
		return (
			<div className={displayClass}>
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
	jobs: React.PropTypes.array.isRequired,
	filter: React.PropTypes.string.isRequired,
	search: React.PropTypes.string.isRequired
};
