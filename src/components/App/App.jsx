import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Title, Div } from './App.styled';

const App = () => {
  return (
    <Div>
      <Title>Phonebook</Title>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </Div>
  );
};

export default App;
