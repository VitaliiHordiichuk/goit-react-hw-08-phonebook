import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';
import { Form, Label, Input, Button } from './ContactForm.styled';
// import { getContacts } from '../../redux/selectors';
// import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  // const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);

  const handleChenge = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    data?.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : addContact({
          id: nanoid(),
          name: name,
          number: number,
        });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChenge}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        {' '}
        <span>Number</span>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChenge}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
