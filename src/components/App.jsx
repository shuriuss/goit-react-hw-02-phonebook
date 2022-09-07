/* eslint-disable no-dupe-class-members */
import React, { Component } from 'react';
// import Form from './Form';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleName = this.handleName.bind(this);
  handleTel = this.handleTel.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  handlerSearch = this.handlerSearch.bind(this);

  render() {
    const arrName = [];

    this.state.contacts.forEach(contact => {
      const name = contact.name.toLowerCase()
      if (name.includes(this.state.filter)) {
        arrName.push(contact);
      }
    });
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
            {arrName.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}{' '}
              </li>
            ))}
          </ul>
          <h3>Find contacts by name</h3>
          <input
            type="text"
            name="nameSearch"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="nameSearch"
            onChange={this.handlerSearch}
            // value={this.state.name}
          />
        </div>
      </section>
    );
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handleTel(e) {
    this.setState({ number: e.target.value });
  }

  handlerSearch(e) {
    this.setState({ filter: e.target.value.toLowerCase() });
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
      number: this.state.number,
    };

    this.setState(state => ({
      contacts: state.contacts.concat(newItem),
      name: '',
      number: '',
    }));
  }
}
