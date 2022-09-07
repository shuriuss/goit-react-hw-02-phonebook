import PropTypes from 'prop-types';
import s from './Form.module.css';

function Form() {
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

          id="new-name"
          onChange={this.handleChange}
          value={this.state.text}
          />
        <button type="submit">Add contact</button>
      </form>
    </section>
  );
}

export default Form;
