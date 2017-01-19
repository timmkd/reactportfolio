import React, {Component} from 'react';

export class Searchable extends Component {

	constructor(props) {
		super(props);
		this.highlight = this.highlight.bind(this);
	}

	highlight(text, search) {
		const index = text.toLowerCase().indexOf(search.toLowerCase());
		const regex = new RegExp(search, 'ig');
		if (search.length > 2 && index) {
			return text.replace(regex, '<strong>$&</strong>');
		}
		return text;
	}

	render() {
		let text = this.props.text;
		let html = {__html: text};

		if (this.props.search) {
			html.__html = (this.highlight(this.props.text, this.props.search));
		}
		return (
			<div dangerouslySetInnerHTML={html}/>
		);
	}
}

Searchable.propTypes = {
	text: React.PropTypes.object.isRequired,
	search: React.PropTypes.object.isRequired
};
