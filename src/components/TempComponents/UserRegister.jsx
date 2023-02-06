import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Link } from '@mui/material';

const scheme = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().min(6).max(12).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const UserRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
    navigate('/contacts');
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: scheme,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <Typography mt={2}>
        Already registered? Proceed to <Link href="/login">login page</Link>
      </Typography>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
          sx={{
            mt: 2,
            mb: 2,
          }}
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          autoComplete="off"
        />
        <TextField
          sx={{
            mt: 2,
            mb: 2,
          }}
          fullWidth
          id="email"
          name="email"
          label="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          autoComplete="off"
        />
        <TextField
          sx={{
            mt: 2,
            mb: 2,
          }}
          fullWidth
          id="password"
          name="password"
          label="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          autoComplete="off"
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default UserRegister;
