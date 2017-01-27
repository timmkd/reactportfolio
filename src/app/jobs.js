import React, {Component} from 'react';

import {Job} from './job';

export class Jobs extends Component {
	constructor() {
		super();
		this.state = {
			display: 'list'
		};
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(display) {
		this.setState({display});
	}

	render() {
		let rows = [];
		let displayClass = 'jobs jobs--display-' + this.state.display;
		this.props.jobs.map(job => {
			rows.push(<Job key={job.key} job={job} search={this.props.search}/>);
			return true;
		});
		return (
			<div className={displayClass}>
				<div>
					{rows}
				</div>
			</div>
		);
	}
}

Jobs.propTypes = {
	jobs: React.PropTypes.array,
	search: React.PropTypes.string
};
