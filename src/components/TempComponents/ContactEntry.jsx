import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/operations';
import { IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Card } from '@mui/material';

import PropTypes from 'prop-types';

const ContactEntry = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const onDelete = () => {
    dispatch(removeContact({ id: id, key: token }));
  };

  return (
    <div>
      <Card variant="outlined">
        <span>{name}: </span>
        <span>{number}</span>
        <IconButton aria-label="delete" onClick={onDelete}>
          <HighlightOffIcon color="secondary" />
        </IconButton>
      </Card>
    </div>
  );
};

ContactEntry.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactEntry;
