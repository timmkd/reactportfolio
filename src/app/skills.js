import React, {Component} from 'react';
import {Searchable} from './searchable';

export class Skills extends Component {
	constructor(props) {
		super(props);
		this.handleClickSkill = this.handleClickSkill.bind(this);
	}

	handleClickSkill(skill) {
		this.props.onClickSkill(skill);
	}

	render() {
		let rows = [];
		this.props.skills.map(skill => {
			skill = skill.toLowerCase();
			rows.push(
				<li className="skill" key={'skill-' + skill} onClick={() => this.handleClickSkill(skill)}>
					<Searchable text={skill} search={this.props.search}/>
				</li>);
			return true;
		});
		return (
			<div className="skills">
				<ul>
						{rows}
				</ul>
			</div>
		);
	}
}

Skills.propTypes = {
	skills: React.PropTypes.array,
	search: React.PropTypes.string,
	onClickSkill: React.PropTypes.func
};
