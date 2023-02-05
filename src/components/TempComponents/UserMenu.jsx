import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { clearContacts } from 'redux/operations';
import { Button, Typography, Divider, Grid, Avatar } from '@mui/material';

const UserMenu = () => {
  const token = useSelector(state => state.auth.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUserEmail = useSelector(state => state.auth.user.email);
  const loggedUserName = useSelector(state => state.auth.user.name);

  const handleLogOut = () => {
    dispatch(logOut(token));
    dispatch(clearContacts());
    navigate('/login');
  };

  return (
    <div>
      <Grid container alignItems="center">
        <Grid item xs>
          <Avatar sx={{ width: 32, height: 32 }}>{loggedUserName[0]}</Avatar>
        </Grid>
        <Divider orientation="vertical" flexItem>
          |
        </Divider>
        <Grid item xs>
          <Typography> {loggedUserEmail} </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem>
          |
        </Divider>
        <Grid item xs>
          <Button color="secondary" variant="contained" onClick={handleLogOut}>
            Logout
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserMenu;
