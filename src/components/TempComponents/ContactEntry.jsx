import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/operations';
import { IconButton, Card, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PropTypes from 'prop-types';

const ContactEntry = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const onDelete = () => {
    dispatch(removeContact({ id: id, key: token }));
  };

  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pl: 2,
          pr: 2,
          gap: 0.4,
        }}
      >
        <Typography component="span" sx={{ fontWeight: '700' }}>
          {name}:
        </Typography>
        <Typography component="span">{number}</Typography>
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
