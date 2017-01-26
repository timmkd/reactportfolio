import React, {Component} from 'react';

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
			<div
				className={wrapperClass}
				onClick={this.handleClose}
				>
				<div className="overlay">
					<div className="overlay--inner">
					</div>
				</div>
			</div>
		);
	}
}

Overlay.propTypes = {
	icon: React.PropTypes.object,
	isActive: React.PropTypes.bool.isRequired,
	closeOverlay: React.PropTypes.func.isRequired
};
