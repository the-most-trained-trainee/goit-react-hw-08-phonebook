import ContactEntryStyled from './StyledContactEntry';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/operations';
import PropTypes from 'prop-types';

const ContactEntry = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(removeContact(id));
  };

  return (
    <ContactEntryStyled>
      <span>{name}: </span>
      <span>{number}</span>
      <button onClick={onDelete}>Delete</button>
    </ContactEntryStyled>
  );
};

ContactEntry.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactEntry;
