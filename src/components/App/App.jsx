import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { nanoid } from 'nanoid';
import { Title, Div } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );

  const [filtered, setFiltered] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = data => {
    data.id = nanoid();
    setContacts(prevState => [...prevState, data]);
  };

  const changeFilter = e => {
    setFiltered(e.target.value);
  };

  const getFilteredContacts = () => {
    const filterNormalized = filtered.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  return (
    <Div>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={formSubmit} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={changeFilter} value={filtered} />
      <ContactList
        contacts={getFilteredContacts()}
        deleteContact={deleteContact}
      />
    </Div>
  );
};

export default App;
