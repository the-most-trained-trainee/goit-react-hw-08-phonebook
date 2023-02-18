import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import UserRegister from './TempComponents/UserRegister';
import Contactspage from './TempComponents/Contacts';
import Layout from './TempComponents/Layout';
import LoginUser from './TempComponents/LoginUser';

// vasiapupukin@mail.net
// 12345678901

const App = () => {
  const dispatch = useDispatch();
  let token = useSelector(state => state.auth.token);
  let isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts(token));
    }
    // else {
    //   navigate('/login');
    // }
  }, [dispatch, isLoggedIn, token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/login" replace />}></Route>
          <Route path="/login" index element={<LoginUser />}></Route>
          <Route path="/register" element={<UserRegister />}></Route>
          <Route path="/contacts" element={<Contactspage />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
