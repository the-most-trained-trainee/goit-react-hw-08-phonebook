import UserMenu from 'components/TempComponents/UserMenu';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  ButtonGroup,
} from '@mui/material';

const Layout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

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
                <Button href="register">Register</Button>
                <Button href="login">Login</Button>
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
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
