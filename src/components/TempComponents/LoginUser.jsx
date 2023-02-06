import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

const scheme = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().min(6).max(12).required(),
});

const initialValues = { email: '', password: '' };

const LoginUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
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
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
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

export default LoginUser;
