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

	testfunction(e) {
		console.log('running test', e);
	}
	render() {
		return (
			<form>
				<input
					placeholder="Search"
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
	onUserInput: React.PropTypes.object.isRequired
};
