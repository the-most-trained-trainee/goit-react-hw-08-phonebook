import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter_slice';

const Filter = () => {
  const dispatch = useDispatch();

  const searchRequest = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <div>
      <label htmlFor="">Find Contacts by Name</label>
      <input type="text" name="find" onChange={searchRequest} />
    </div>
  );
};

export default Filter;
