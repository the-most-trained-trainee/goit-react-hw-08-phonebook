import UserMenu from 'components/TempComponents/UserMenu';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  ButtonGroup,
} from '@mui/material';
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const location = useLocation();

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
            {!isLoggedIn && (
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  href="register"
                  disabled={location.pathname === '/register'}
                >
                  Register
                </Button>
                <Button href="login" disabled={location.pathname === '/login'}>
                  Login
                </Button>
              </ButtonGroup>
            )}
            {isLoggedIn && <UserMenu />}
          </Toolbar>
        </AppBar>
      </header>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '450px',
        }}
      >
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
