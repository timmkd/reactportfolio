import React, {Component} from 'react';
import {Header} from './header';
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

	render() {
		return (
			<div>
				<Header/>
				<main>
					<Title/>
					<SearchBar onUserInput={this.handleSearch}/>
					<p>The state is: {this.state.filter}</p>
					<h2>Skills</h2>
					<Skills skills={this.state.skills}/>
					<Jobs jobs={this.state.jobs} filter={this.state.filter}/>
				</main>
				<Footer/>
			</div>
		);
	}
}
