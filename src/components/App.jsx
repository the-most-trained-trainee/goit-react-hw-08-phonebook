import { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import { refreshUser } from 'redux/auth/auth-operations';

import Layout from './TempComponents/Layout';

const UserRegister = lazy(() => import('./TempComponents/UserRegister'));
const Contactspage = lazy(() => import('./TempComponents/Contacts'));
const LoginUser = lazy(() => import('./TempComponents/LoginUser'));

// vasiapupukin@mail.net
// 12345678901

const App = () => {
  const dispatch = useDispatch();
  let token = useSelector(state => state.auth.token);
  let isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts(token));
    }
  }, [dispatch, isLoggedIn, token]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

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
