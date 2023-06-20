import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './filter.module.css';
class FilterContacts extends Component {
  render() {
    const { filterInputValue } = this.props.filter;
    return (
      <label htmlFor="filter" className={css.filter}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={css['filter__input']}
          id="filter"
          value={filterInputValue}
          onChange={this.props.handlerChange}
        />
      </label>
    );
  }
}
export default FilterContacts;

FilterContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
};
