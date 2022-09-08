import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  static propTypes = {
    arrName: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { arrName } = this.props;
    return (
      <>
        {arrName.length === 0 ? (
          <p>No contact</p>
        ) : (
          <ul>
            {arrName.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}{' '}
              </li>
            ))}
          </ul>
          
        )}
      </>
    );
  }
}

export default ContactList;
