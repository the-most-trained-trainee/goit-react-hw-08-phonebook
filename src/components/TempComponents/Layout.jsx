import { NavLink, Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutUser from 'components/LogoutUser/LogoutUser';

import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Button, ButtonGroup } from '@mui/material';

const Layout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const loggedUser = useSelector(state => state.auth.user.name);

  return (
    <>
      <header>
        <AppBar position="static" color="primary">
          <Toolbar variant="dense">
            <Typography
              variant="h5"
              color="inherit"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Contacts Holder
            </Typography>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              {!isLoggedIn && <Button href="/register">Register</Button>}
              {!isLoggedIn && <Button href="/login">Login</Button>}
              {isLoggedIn && <Button>Logout</Button>}
            </ButtonGroup>
          </Toolbar>
        </AppBar>

        <span>{isLoggedIn ? `Welcome, ${loggedUser}` : 'Please login'}</span>
        {isLoggedIn && <LogoutUser />}
      </header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
