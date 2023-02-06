import ContactList from 'components/TempComponents/ContactList';
import ContactForm from 'components/TempComponents/ContactForm';
import Filter from 'components/TempComponents/Filter';

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
