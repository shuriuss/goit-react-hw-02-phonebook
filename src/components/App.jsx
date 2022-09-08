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
    this.setState(prevstate => ({
      contacts: prevstate.contacts.concat(newContact),
    }));
  };

  render() {
    const arrName = [];

    this.state.contacts.forEach(contact => {
      const name = contact.name.toLowerCase();
      if (name.includes(this.state.filter)) {
        arrName.push(contact);
      }
    });

    return (
      <section>
        <h1>Phonbook</h1>
        <Form handleSubmit={this.handleSubmit} />

        <div>
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.handlerSearch} />
          <ContactList arrName={arrName} />
         
        </div>
      </section>
    );
  }

  // handleName =(e)=> {
  //   this.setState({ name: e.target.value });
  // }

  // handleTel=(e)=> {
  //   this.setState({ number: e.target.value });
  // }

  // handleSubmit=(e)=> {
  //   e.preventDefault();
  //   if (this.state.name.length === 0) {
  //     return;
  //   }
  //   if (this.state.number.length === 0) {
  //     return;
  //   }

  //   const newItem = {
  //     id: Date.now(),
  //     name: this.state.name,
  //     number: this.state.number,
  //   };

  //   this.setState(state => ({
  //     contacts: state.contacts.concat(newItem),
  //     name: '',
  //     number: '',
  //   }));
  // }
}
