/* eslint-disable no-dupe-class-members */
import React, { Component } from 'react';
import Form from './Form';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerSearch = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  handleSubmit = newContact => {
    if (this.state.contacts.some(el => el.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prevstate => ({
      contacts: prevstate.contacts.concat(newContact),
    }));
    console.log(this.state.contacts);
  };

  handleDelete = id => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatedContacts });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedContacts = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedContacts)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <section>
        <h1>Phonbook</h1>
        <Form handleSubmit={this.handleSubmit} />

        <div>
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.handlerSearch} />
          <ContactList
            contact={filteredContacts}
            handleDelete={this.handleDelete}
          />
        </div>
      </section>
    );
  }
}
