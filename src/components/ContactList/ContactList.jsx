import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors';
import { Button, Ul, Li } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const contactsFiltered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Ul>
      {contactsFiltered.map(contact => (
        <Li key={contact.id}>
          <span>
            {contact.name}
            {': '}
            {contact.number}
          </span>
          <Button
            type="button"
            onClick={() => dispatch(removeContact(contact.id))}
          >
            delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

export default ContactList;
