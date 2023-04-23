import PropTypes from 'prop-types';
import '../searchbar/Searchbar.css';
import { Component } from 'react';

class Searchbar extends Component {
  state = {
    query: '',
  };

  onHandleChange = event => {
    const { name, value } = event.currentTarget;
      this.setState({ [name]: value.trim() });
      console.log(value);
  };

  handleSubmit = event => {
    event.preventDefault();
      const query = event.target.query.value;
      this.setState({query: ''});
      this.props.onFormSubmit({query,});
      console.log("submit", query);
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm" >
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
                    className="SearchForm-input"
                    type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.onHandleChange}
                    value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};