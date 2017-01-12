import React, {Component} from 'react';
import {Header} from './header';
import {Title} from './title';
import {Jobs} from './jobs';
import {SearchBar} from './searchbar';
import {Footer} from './footer';

export class Main extends Component {
  handleSearch() {
    console.log('search');
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          <Title/>
          <SearchBar onUserInput={this.handleSearch}/>
          <Jobs/>
        </main>
        <Footer/>
      </div>
    );
  }
}
