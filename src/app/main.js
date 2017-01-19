import React, {Component} from 'react';
import {Title} from './title';
import {Jobs} from './jobs';
import {Skills} from './skills';
import {SearchBar} from './searchbar';
import {Footer} from './footer';
import axios from 'axios';

export class Main extends Component {
	constructor() {
		super();
		this.state = {
			jobs: [],
			filter: '',
			skills: []
		};
		this.handleSearch = this.handleSearch.bind(this);
		this.getSkills = this.getSkills.bind(this);
		this.setFilter = this.setFilter.bind(this);
		this.handleClickSkill = this.handleClickSkill.bind(this);
	}

	componentDidMount() {
		axios
			.get('app/jobs.json')
			.then(response => {
				this.setState({jobs: response.data});
				this.getSkills(this.state.jobs);
			});
	}

	getSkills(jobs) {
		let skills = [];
		jobs.map(job => {
			job.skills.map(skill => {
				console.log('slk');
				if (skills.indexOf(skill) === -1) {
					skills.push(skill);
				}
				return true;
			});
			return true;
		});
		this.setState({skills});
	}

	handleSearch(filter) {
		this.setState({filter});
		console.log('the state is', this.state.filter);
	}

	handleClickSkill(filter) {
		this.setState({filter});
	}

	setFilter(filter) {
		this.setState({filter});
	}

	render() {
		return (
			<div>
				<header className="header">
					<div className="container">
						<Title/>
						<SearchBar onUserInput={this.handleSearch} filterText={this.state.filter} search={this.state.filter}/>
						<Skills skills={this.state.skills} onClickSkill={this.handleClickSkill} search={this.state.filter}/>
					</div>
				</header>
				<main>
					<div className="container">
						<Jobs jobs={this.state.jobs} filter={this.state.filter} search={this.state.filter}/>
					</div>
				</main>
				<Footer/>
			</div>
		);
	}
}
