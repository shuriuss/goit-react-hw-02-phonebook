/* eslint-disable no-dupe-class-members */
import React, { Component } from 'react';
// import Form from './Form';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleName = this.handleName.bind(this);
  handleTel = this.handleTel.bind(this);

  handleSubmit = this.handleSubmit.bind(this);

  render() {
    return (
      <section>
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
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact => (
              <li key={contact.id}>{contact.name}: {contact.number} </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  handleName(e) {
    this.setState({ name: e.target.value })
  }

  handleTel(e) {
    this.setState({ number: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name.length === 0) {
      return;
    }
    if (this.state.number.length === 0) {
      return;
    }

    const newItem = {
      id: Date.now(),
      name: this.state.name,
      number: this.state.number
    };
    this.setState(state => ({
      contacts: state.contacts.concat(newItem),
      name: '',
      number: '',
    }));
  }
}
