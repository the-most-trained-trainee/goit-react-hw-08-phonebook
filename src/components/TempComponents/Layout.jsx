import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutUser from 'components/LogoutUser/LogoutUser';

const Layout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const loggedUser = useSelector(state => state.auth.user.name);

  return (
    <>
      <header>
        {!isLoggedIn && <NavLink to="/register">register</NavLink>}
        {!isLoggedIn && <NavLink to="/login">login</NavLink>}
        <span>{isLoggedIn ? `Welcome, ${loggedUser}` : 'Please login'}</span>
        {isLoggedIn && <LogoutUser />}
      </header>
      <Outlet />
      <footer>footer 2023</footer>
    </>
  );
};

export default Layout;
