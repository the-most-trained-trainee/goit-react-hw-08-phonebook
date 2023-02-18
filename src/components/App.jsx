import { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { refreshUser } from 'redux/auth/auth-operations';
import { RestrictedRoute, PrivateRoute } from './RedirectRoutes';

import Layout from './TempComponents/Layout';

const UserRegister = lazy(() => import('./TempComponents/UserRegister'));
const Contactspage = lazy(() => import('./TempComponents/Contacts'));
const LoginUser = lazy(() => import('./TempComponents/LoginUser'));

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
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<UserRegister />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginUser />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contactspage />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
