import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    search: '',
  };
  onChangeSearch = e => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onSubmit}>
          <input
            className={css.SearchForm_input}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.onChangeSearch}
            value={this.state.search}
          />
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
