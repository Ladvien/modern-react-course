import React, {Component} from 'react'

class SearchBar extends Component {
  state = {
    term: ''
  };

  onInputChange = (event) => {
    this.setState({term: event.target.value});
  };

  onSubmit = (event) => {
    event.preventDefault();
    // TODO: 
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Video Label</label>
            <input type="text" vale={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;