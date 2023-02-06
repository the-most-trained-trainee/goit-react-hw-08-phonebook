import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import UserRegister from './TempComponents/UserRegister';
import { Routes, Route, Navigate } from 'react-router-dom';
import Contactspage from './TempComponents/Contacts';
import Layout from './TempComponents/Layout';
import LoginUser from './TempComponents/LoginUser';

const App = () => {
  const dispatch = useDispatch();
  let token = useSelector(state => state.auth.token);
  let isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts(token));
    }
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
