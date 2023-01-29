import { NavLink } from 'react-router-dom';
import LoginUser from 'components/LoginUser/LoginUser';

const Loginpage = () => {
  return (
    <>
      <h1>this is Loginpage</h1>
      <LoginUser />

      <NavLink to="/">Go To Homepage</NavLink>
    </>
  );
};

export default Loginpage;
