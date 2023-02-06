import ContactEntry from './ContactEntry';
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '450px',
        gap: '10px',
      }}
    >
      {getFilteredContacts().map(contact => (
        <ContactEntry
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </div>
  );
};

export default ContactList;
