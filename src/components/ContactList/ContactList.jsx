import ContactEntry from '../ContactEntry/ContactEntry';
import EntriesListStyled from './StyledEntriesList';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const allContacts = useSelector(state => state.contacts.contacts);
  const filterRequest = useSelector(state => state.filter.filter);

  const getFilteredContacts = () => {
    let result = [];
    if (filterRequest === '') {
      result = allContacts;
    } else {
      result = allContacts.filter(contact =>
        contact.name.toUpperCase().includes(filterRequest.toUpperCase())
      );
    }
    return result;
  };

  return (
    <EntriesListStyled>
      {getFilteredContacts().map(contact => (
        <ContactEntry
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.phone}
        />
      ))}
    </EntriesListStyled>
  );
};

export default ContactList;
