import { useState } from 'react';
import StyledForm from './StyledContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact } from 'redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const token = useSelector(state => state.auth.token);

  const handleChange = e => {
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

    if (!contacts.some(entry => entry.name === name)) {
      dispatch(
        addContact({
          newContact: {
            name: name,
            number: number,
          },
          key: token,
        })
      );
      setName('');
      setNumber('');
    } else {
      alert(name + ' is updated');

      const contactIndex = contacts.findIndex(entry => entry.name === name);

      dispatch(
        updateContact({
          contact: {
            name: name,
            number: number,
          },
          key: token,
          id: contacts[contactIndex].id,
          contactIndex: contactIndex,
        })
      );
      setName('');
      setNumber('');
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <StyledForm>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="">Phone</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </StyledForm>
    </form>
  );
};

export default ContactForm;
