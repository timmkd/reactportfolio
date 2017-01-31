import React, {Component} from 'react';
import {Jobs} from './jobs';

export class Overlay extends Component {
	constructor() {
		super();
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		this.props.closeOverlay();
	}

	render() {
		let wrapperClass = 'overlay--wrapper';
		if (this.props.isActive) {
			wrapperClass += ' active';
		}
		return (
			<div className={wrapperClass}>
				<div className="overlay--behind" onClick={this.handleClose}></div>
				<div className="overlay">
					<div className="overlay--close icon-cancel" onClick={this.handleClose}></div>
					<div className="overlay--inner">
						<Jobs jobs={this.props.jobs}/>
					</div>
				</div>
			</div>
		);
	}
}

Overlay.propTypes = {
	icon: React.PropTypes.object,
	isActive: React.PropTypes.bool.isRequired,
	closeOverlay: React.PropTypes.func.isRequired,
	jobs: React.PropTypes.array
};
