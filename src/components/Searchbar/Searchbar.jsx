import React, { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    name: '',
  };
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = ev => {
    ev.preventDefault();
    this.props.getQuery(this.state.name);
    this.setState({ name: '' });
  };
  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          className={css.input}
          type="text"
          placeholder="Search images and photos"
          value={this.state.name}
        />

        <button type="submit" className={css.button}>
          <span className="button-label">Search</span>
        </button>
      </form>
    );
  }
}
export default Searchbar;
