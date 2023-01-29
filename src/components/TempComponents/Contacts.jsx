import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

const Contactspage = () => {
  return (
    <>
      <h1>this is Contactspage</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default Contactspage;
