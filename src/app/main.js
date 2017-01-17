import React, {Component} from 'react';
import {Header} from './header';
import {Title} from './title';
import {Jobs} from './jobs';
import {SearchBar} from './searchbar';
import {Footer} from './footer';
import axios from 'axios';

export class Main extends Component {
	constructor() {
		super();
		this.state = {
			jobs: [],
			filter: ''
		};
		this.handleSearch = this.handleSearch.bind(this);
	}

	componentDidMount() {
		axios
			.get('app/jobs.json')
			.then(response => {
				console.log(response);
				this.setState({jobs: response.data});
			});
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
					The state is: {this.state.filter}
					<Jobs jobs={this.state.jobs} filter={this.state.filter}/>
				</main>
				<Footer/>
			</div>
		);
	}
}
