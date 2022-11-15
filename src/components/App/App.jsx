import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Title, Div } from './App.styled';
import { useState } from 'react';

const App = () => {
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    setFilter(e);
  };
  return (
    <Div>
      <Title>Phonebook</Title>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />

      <ContactList filter={filter} />
    </Div>
  );
};

export default App;
