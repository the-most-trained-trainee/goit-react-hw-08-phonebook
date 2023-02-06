import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import UserRegister from './TempComponents/UserRegister';
import { Routes, Route } from 'react-router-dom';
import Homepage from './TempComponents/Homepage';
import Contactspage from './TempComponents/Contacts';
import Layout from './TempComponents/Layout';
import LoginUser from './TempComponents/LoginUser';

// Vasily Vasilovich
// vasilander@mail.com
// 12345678

//   name: 'Valerian Valerianovich',
//   email: 'valerian@mail.com',
//   password: '987654321',

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
          <Route path="login" element={<LoginUser />}></Route>
          <Route path="register" element={<UserRegister />}></Route>
          <Route path="contacts" element={<Contactspage />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
