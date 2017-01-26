import React, {Component} from 'react';
import {Header} from './header';
import {Jobs} from './jobs';
import {Skills} from './skills';
import {SearchBar} from './searchbar';
import {Boxes} from './boxes';
import {Footer} from './footer';
import {Overlay} from './overlay';
import axios from 'axios';

export class Main extends Component {
	constructor() {
		super();
		this.state = {
			jobs: [],
			filteredJobs: [],
			filter: '',
			skills: [],
			overlay: false
		};
		this.handleSearch = this.handleSearch.bind(this);
		this.getSkills = this.getSkills.bind(this);
		this.jobMatch = this.jobMatch.bind(this);
		this.updateFilteredJobs = this.updateFilteredJobs.bind(this);
		this.handleClickSkill = this.handleClickSkill.bind(this);
		this.handleClickBox = this.handleClickBox.bind(this);
		this.showOverlay = this.showOverlay.bind(this);
		this.closeOverlay = this.closeOverlay.bind(this);
	}

	componentDidMount() {
		axios
			.get('app/jobs.json')
			.then(response => {
				this.setState({jobs: response.data});
				this.getSkills(this.state.jobs);
				this.updateFilteredJobs();
			});
	}

	jobMatch(job, filter) {
		for (let skill of job.skills) {
			if (skill.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
				return true;
			}
		}

		if (job.text.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
			return true;
		}

		return false;
	}

	updateFilteredJobs(filter) {
		let rows = [];
		this.state.jobs.map(job => {
			if (filter && !this.jobMatch(job, filter)) {
				return false;
			}
			rows.push(job);
			return true;
		});
		this.setState({filteredJobs: rows});
	}

	getSkills(jobs) {
		let skills = [];
		jobs.map(job => {
			job.skills.map(skill => {
				if (skills.indexOf(skill.toLowerCase()) === -1) {
					skills.push(skill.toLowerCase());
				}
				return true;
			});
			return true;
		});
		this.setState({skills});
	}

	handleSearch(filter) {
		this.setState({filter});
		this.updateFilteredJobs(filter);
	}

	handleClickSkill(filter) {
		this.handleSearch(filter);
	}

	handleClickBox() {
		this.showOverlay();
	}

	showOverlay() {
		this.setState({overlay: true});
	}

	closeOverlay() {
		this.setState({overlay: false});
	}

	render() {
		let overlayOutsideClass = 'overlay--outside';
		if (this.state.overlay) {
			overlayOutsideClass += ' active';
		}
		return (
			<div>
				<div className={overlayOutsideClass}>
					<Header/>
					<div className="filters">
						<div className="container">
							<SearchBar onUserInput={this.handleSearch} filterText={this.state.filter} search={this.state.filter}/>
							<Skills skills={this.state.skills} onClickSkill={this.handleClickSkill} search={this.state.filter}/>
						</div>
					</div>
					<main>
						<div className="container">
							<Boxes jobs={this.state.filteredJobs} filter={this.state.filter} search={this.state.filter} onClickBox={this.handleClickBox}/>
							<Jobs jobs={this.state.filteredJobs} filter={this.state.filter} search={this.state.filter}/>
						</div>
					</main>
					<Footer/>
				</div>
				<Overlay isActive={this.state.overlay} closeOverlay={this.closeOverlay}/>
			</div>
		);
	}
}
