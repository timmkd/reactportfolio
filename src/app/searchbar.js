import React, {Component} from 'react';

export class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput();
  }
  render() {
    return (
      <form>
        <input placeholder="Search" onChange={this.handleChange}/>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onUserInput: React.PropTypes.object.isRequired
};
