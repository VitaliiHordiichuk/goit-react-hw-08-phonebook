import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsApi';
import Filter from './components/Filter';
import { selectAllContacts } from '../../redux/contacts/contactsSelectors';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const ContactPage = () => {
  const [filtered, setFiltered] = useState('');
  const contacts = useSelector(selectAllContacts);
  const onChangeFilter = e => {
    setFiltered(e.target.value);
  };

  const getFilteredContacts = () => {
    const filterNormalized = filtered.toLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ChakraProvider theme={theme}>
      <Box maxW="960px" mx="auto">
        <ColorModeSwitcher justifySelf="flex-end" />
        <ContactForm />
        <Filter onChangeFilter={onChangeFilter} value={filtered} />
        <ContactList getFilteredContacts={getFilteredContacts()} />
      </Box>
    </ChakraProvider>
  );
};

export default ContactPage;
