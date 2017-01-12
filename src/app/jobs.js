import React, {Component} from 'react';
import axios from 'axios';

import {Job} from './job';

const styles = {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  techs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
};

export class Jobs extends Component {
  constructor() {
    super();
    this.state = {jobs: []};
  }

  componentDidMount() {
    axios
      .get('app/jobs.json')
      .then(response => {
        console.log(response);
        this.setState({jobs: response.data});
      });
  }

  render() {
    console.log(this.state.jobs);
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          Cooked with all these awesome technologies:
        </h2>
        <div>
          {this.state.jobs.map((job, i) => (
            <Job key={i} job={job}/>
          ))}
        </div>
      </div>
    );
  }
}
