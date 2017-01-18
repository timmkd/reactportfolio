import React, {Component} from 'react';

export class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		console.log('handlechange');
		this.props.onUserInput(this.textInput.value);
	}

	render() {
		console.log('render');
		return (
			<form>
				<input
					placeholder="Search"
					value={this.props.filterText}
					onChange={this.handleChange}
					ref={input => {
						this.textInput = input;
					}}
					/>
			</form>
		);
	}
}

SearchBar.propTypes = {
	onUserInput: React.PropTypes.object.isRequired,
	filterText: React.PropTypes.object.isRequired
};
