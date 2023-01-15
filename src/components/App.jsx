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

// https://www.youtube.com/watch?v=ZvfcVZcZUEY - 29 - navigation routing - appbar

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
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <UserMenu />
      <UserRegister />
      <LoginUser />
      <LogoutUser />
    </Container>
  );
};

export default App;
