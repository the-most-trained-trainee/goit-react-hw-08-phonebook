import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter_slice';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const searchRequest = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <TextField
      fullWidth
      label="Search contact"
      type="text"
      name="find"
      onChange={searchRequest}
    />
  );
};

export default Filter;
