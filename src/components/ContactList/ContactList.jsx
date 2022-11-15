import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsApi';
import PropTypes from 'prop-types';

import { Button, Ul, Li } from './ContactList.styled';

const ContactList = ({ filter }) => {
  const { data } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const contactsFiltered = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Ul>
      {contactsFiltered?.map(({ id, name, phone }) => (
        <Li key={id}>
          <span>
            {name}
            {': '}
            {phone}
          </span>
          <Button
            type="button"
            disabled={isDeleting}
            onClick={() => deleteContact(id)}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default ContactList;
