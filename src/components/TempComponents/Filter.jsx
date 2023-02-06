import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter_slice';
import { TextField, Typography } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const searchRequest = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <div>
      <Typography
        mt={2}
        sx={{
          mt: 10,
          mb: 2,
        }}
      >
        Find among your contacts
      </Typography>
      <TextField
        sx={{
          mb: 2,
        }}
        fullWidth
        label="Search contact"
        type="text"
        name="find"
        onChange={searchRequest}
      />
    </div>
  );
};

export default Filter;
