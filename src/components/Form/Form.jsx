import React from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';

function Form({}) {
  return (
    <div>
    <h1>Phonbook</h1>
        <h2>Name</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="newName"
            onChange={this.handleName}
            value={this.state.name}
          />
          <h2>Number</h2>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="newTel"
            onChange={this.handleTel}
            value={this.state.number}
          />
          <button type="submit">Add contact</button>
        </form>
        </div>
  )
}

export default Form;
