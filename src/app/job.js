import React, {Component} from 'react';
import {Skills} from './skills';

export class Job extends Component {
	render() {
		return (
			<div className="job">
				<img src={this.props.job.logo}/>
				<div className="job-text">
					<h3 className="job--title">
						{this.props.job.title}
					</h3>
					<p className="job--date">{this.props.job.dates}</p>
					<p className="job--descrip">{this.props.job.text}</p>
					<Skills skills={this.props.job.skills}/>
				</div>
			</div>
		);
	}
}

Job.propTypes = {
	job: React.PropTypes.object.isRequired
};
