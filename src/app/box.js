import React, {Component} from 'react';

export class Box extends Component {
	render() {
		return (
			<div
				className="box"
				ref={ref => {
					this.boxDOM = ref;
				}}
				onClick={this.props.onClick}
				>
				<img src={this.props.icon.img}/>
			</div>
		);
	}
}

Box.propTypes = {
	icon: React.PropTypes.object.isRequired,
	onClick: React.PropTypes.func.isRequired
};
