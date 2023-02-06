import ContactList from 'components/TempComponents/ContactList';
import ContactForm from 'components/TempComponents/ContactForm';
import Filter from 'components/TempComponents/Filter';

const Contactspage = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default Contactspage;
