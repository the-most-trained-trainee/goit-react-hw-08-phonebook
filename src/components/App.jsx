import Container from './Container/StyledContainer';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import UserMenu from './UserMenu/UserMenu';
import UserRegister from './UserRegister/UserRegister';
import LoginUser from './LoginUser/LoginUser';
import LogoutUser from './LogoutUser/LogoutUser';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';

// Маршрутизація​
// Vasily Vasilovich
// vasilander@mail.com
// 12345678

import Homepage from './TempComponents/Homepage';
import Loginpage from './TempComponents/Login';
import Registerpage from './TempComponents/Register';
import Contactspage from './TempComponents/Contacts';
import Layout from './TempComponents/Layout';
// import RequireLogin from './TempComponents/RequireLogin';
// /contacts - приватний маршрут для роботи зі списком контактів користувача
// Додай компонент навігації Navigation з посиланнями для переходу по маршрутах.

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
          <Route index element={<Homepage />}></Route>
          <Route path="login" element={<Loginpage />}></Route>
          <Route path="register" element={<Registerpage />}></Route>
          <Route path="contacts" element={<Contactspage />}></Route>
        </Route>

        {/* <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <UserMenu />
        <UserRegister />
        <LoginUser />
        <LogoutUser />
      </Container> */}
      </Routes>
    </>
  );
};

export default App;
