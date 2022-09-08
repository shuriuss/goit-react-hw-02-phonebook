import React, { Component } from 'react';
// import s from './ContactForm.module.scss'

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleTel = e => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = e => {
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
    this.props.handleSubmit(newItem);
  };

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default Form;
