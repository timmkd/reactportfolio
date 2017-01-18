import React, {Component} from 'react';

export class Skills extends Component {
	render() {
		let rows = [];
		this.props.skills.map(skill => {
			skill = skill.toLowerCase();
			rows.push(<li className="skill" key={'skill-' + skill}>{skill}</li>);
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
	skills: React.PropTypes.object.isRequired
};
