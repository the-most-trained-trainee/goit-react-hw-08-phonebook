import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { clearContacts } from 'redux/operations';
import { useNavigate } from 'react-router-dom';

const LogoutUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);

  const handleLogOut = () => {
    dispatch(logOut(token));
    dispatch(clearContacts());
    navigate('/login');
  };

  return (
    <button type="button" onClick={handleLogOut}>
      Logout
    </button>
  );
};

export default LogoutUser;
