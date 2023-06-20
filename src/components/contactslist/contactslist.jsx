import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './contactslist.module.css';
class Contacts extends Component {
  render() {
    return (
      <ul className={css.list}>
        {this.props.contacts.map(({ name, id, number }) => (
          <li key={id} className={css['list__items']}>
            {name}: <span>{number}</span>
            <button
              type="submit"
              className={css['list__items-btn']}
              onClick={() => this.props.deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;

Contacts.protoTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
