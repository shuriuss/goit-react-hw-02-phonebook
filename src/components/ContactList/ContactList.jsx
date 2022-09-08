import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  static propTypes = {
    contact: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    console.log(this.props);
    const { contact, handleDelete } = this.props;
    return (
      <>
        {contact.length === 0 ? (
          <p>No contact</p>
        ) : (
          <>
            <ul>
              {contact.map(({id, name, number}) => (
                <li key={id}>
                  {name}: {number}
                  <button type="button" onClick={() => handleDelete(id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}

export default ContactList;
