import PropTypes from 'prop-types';
import '../searchbar/Searchbar.css';
import { Component } from 'react';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value.trim() });
  };

  clearFormFields = e => {
    e.preventDefault();
    const query = e.target.query.value;
    this.setState({ query: '' });
    this.props.onSubmit({
      query,
    });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            name="query"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
