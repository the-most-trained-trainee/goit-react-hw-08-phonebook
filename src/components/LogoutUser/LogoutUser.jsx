import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

const LogoutUser = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const handleLogOut = () => {
    dispatch(logOut(token));
  };

  return (
    <button type="button" onClick={handleLogOut}>
      Logout
    </button>
  );
};

export default LogoutUser;
