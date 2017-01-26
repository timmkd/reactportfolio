import React, {Component} from 'react';
import {Box} from './box';

export class Boxes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			icons: {},
			iconKeys: []
		};
		this.getIcons = this.getIcons.bind(this);
		console.log('at contstruct', this.state.icons);
	}

	componentDidMount() {
		console.log('at didmount', this.state.icons);
	}

	componentWillReceiveProps(props) {
		const icons = this.getIcons(props.jobs);
		if (icons) {
			this.setState({icons});
		}
		console.log('at componentWillReceiveProps', this.state.icons, props);
	}

	getIcons(jobs) {
		let icons = this.state.icons;
		jobs.map(job => {
			if (job.name in icons) {
				icons[job.name].jobs.push(job);
			} else {
				icons[job.name] = {
					jobs: [job],
					img: job.logo
				};
			}
			return true;
		});
		return icons;
	}

	showOverlay() {
		console.log('click');
		this.props.onClickBox();
	}

	render() {
		let rows = [];
		// let displayClass = 'jobs jobs--display-' + this.state.display;
		Object.keys(this.state.icons).map(key => {
			const icon = this.state.icons[key];
			rows.push(
				<Box
					key={key}
					icon={icon}
					onClick={() => {
						this.showOverlay();
					}}
					/>
			);
			return true;
		});

		return (
			<div className="boxes">
				{rows}
			</div>
		);
	}
}

Boxes.propTypes = {
	jobs: React.PropTypes.array.isRequired,
	filter: React.PropTypes.string.isRequired,
	onClickBox: React.PropTypes.func.isRequired
};
