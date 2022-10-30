import { Button, Ul, Li } from './ContactList.styled'
import PropTypes from 'prop-types';

const ContactList = ({contacts, deleteContact }) => (
    <Ul>
        {contacts.map(contact => (
            <Li key={contact.id}>
                <span>{contact.name}
                {': '}
                {contact.number}</span>
                
                <Button type="button"  onClick={() => deleteContact(contact.id)} >delete</Button>
            </Li>
            
        ))}
   </Ul>)
        
ContactList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),),
}
        
export default ContactList;