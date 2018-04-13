import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.searchUser("");
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchUser(this.state.searchTerm);
    this.setState({ searchTerm: ''});
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}


export default SearchBar;
