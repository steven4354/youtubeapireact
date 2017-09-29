import React, { Component } from 'react';

//, { Component } means React.Component so that's not needed to write instead just Component

//const SearchBar = () => {
//  return <input />;
//}

class SearchBar extends Component {
  //initialize state
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => {this.setInput(event)}} />
      </div>
    )
  }

  setInput(event){
    this.setState({ term: event.target.value })
    this.props.onVideoSearch(this.state.term)
  }
}

export default SearchBar;
