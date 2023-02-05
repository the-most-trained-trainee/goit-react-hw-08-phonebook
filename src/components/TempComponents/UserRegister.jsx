import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

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
      <form onSubmit={formik.onSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          // value={formik.values.name}
          // onChange={formik.handleChange}
          // error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="email"
          // value={formik.values.email}
          // onChange={formik.handleChange}
          // error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="password"
          type="password"
          // value={formik.values.password}
          // onChange={formik.handleChange}
          // error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Register
        </Button>
      </form>

      {/* <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field type="text" name="name" />
          <ErrorMessage component="div" name="login" />
        </label>

        <label htmlFor="email">
          email
          <Field type="email" name="email" />
          <ErrorMessage component="div" name="email" />
        </label>

        <label htmlFor="password">
          password
          <Field type="password" name="password" />
          <ErrorMessage component="div" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form> */}
    </div>
  );
};

export default UserRegister;
