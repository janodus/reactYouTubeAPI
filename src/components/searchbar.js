import React, { Component } from 'react';


class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '', type: "Search Bar!" };
  }

  // this is the syntax we use to render something from a class
  render() {
    return (
      <div>

        <input
          value= { this.state.term } //this is turned into a controlled component
          onChange={ (event) => this.setState({ term: event.target.value }) }
        />

        <p>Hello from { this.state.type }</p>
        <p>What we are searching for: {this.state.term}</p>

      </div>
    );
  }
  // onInputChange(event) { //this could be anything... object.data basically
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
