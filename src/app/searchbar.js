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
					placeholder="Filter jobs by keyword..."
					value={this.props.filterText}
					onChange={this.handleChange}
					ref={input => {
						this.textInput = input;
					}}
					className="searchbar"
					/>
			</form>
		);
	}
}

SearchBar.propTypes = {
	onUserInput: React.PropTypes.object.isRequired,
	filterText: React.PropTypes.object.isRequired
};
