import React, {Component} from 'react';

export class ToggleDisplay extends Component {

	constructor(props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);
		this.getToggles = this.getToggles.bind(this);

		this.state = {
			displays: [
				{
					name: 'list',
					icon: 'list',
					text: 'List'
				},
				{
					name: 'icons',
					icon: 'th',
					text: 'Icons'
				}
			]
		};
	}

	handleToggle(display) {
		this.props.onToggle(display);
	}

	getToggles() {
		let rows = [];
		this.state.displays.map(display => {
			const activeClass = this.props.activeDisplay === display.name ? ' active' : '';
			console.log(this.props.activeDisplay);
			const className = 'toggle-display--' + display.name + ' icon-' + display.icon + activeClass;
			rows.push(
				<li>
					<button className={className} onClick={() => this.handleToggle(display.name)}>
						<span className="toggle-display--text">{display.text}</span>
					</button>
				</li>
			);
			return true;
		}
		);
		return rows;
	}

	render() {
		console.log('render');
		return (
			<ul className="toggle-display">
				{this.getToggles()}
			</ul>
		);
	}
}

ToggleDisplay.propTypes = {
	onToggle: React.PropTypes.object.isRequired,
	activeDisplay: React.PropTypes.object.isRequired
};
