import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('myContacts');
    const parsedContacts = JSON.parse(storedContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('myContacts', JSON.stringify(contacts));
    }
  }

  addContact = ({ name, number }) => {
    const isNameAdded = name.toUpperCase();
    
    const isAdded = this.state.contacts.find(el => {
      return (el.name.toUpperCase() === isNameAdded);
    });

    if (isAdded) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));

  }

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const isAddedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(isAddedFilter)
    );
  };

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  render() {
    const { filter } = this.state;
    const getContacts = this.getContacts();
    return (
      <div>
        <h1 className='title'>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2  className='title'>Contacts</h2>
        <Filter value={filter} onChange={this.filterChange} />
        <ContactList
          contacts={getContacts}
          onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

App.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  }),
};

export default App;