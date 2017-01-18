import React, {Component} from 'react';
import {Skills} from './skills';
import {Searchable} from './searchable';

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
					<p className="job--descrip"><Searchable text={this.props.job.text} search={this.props.search}/></p>
					<Skills skills={this.props.job.skills} search={this.props.search}/>
				</div>
			</div>
		);
	}
}

Job.propTypes = {
	job: React.PropTypes.object.isRequired,
	search: React.PropTypes.object.isRequired
};
