import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';
import { Layout, TitlePhoneBook, TitleContacts } from './AppStyled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContactHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name)
      ? alert(
          `${name} is already in your contact list.`,
          'OK'
        )
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContactHandler = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContactsHandler = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const addContactHandler = this.addContactHandler;
    const changeFilter = this.changeFilter;
    const filterContactsHandler = this.filterContactsHandler();
    const deleteContactHandler = this.deleteContactHandler;

    return (
      <Layout>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactForm onSubmit={addContactHandler} />
        <TitleContacts>Contacts</TitleContacts>
        <ContactFilter onFilter={changeFilter} filter={filter} />
          <ContactList
            filterContactsHandler={filterContactsHandler}
            deleteContactHandler={deleteContactHandler}
          />
      </Layout>
    );
  }
}