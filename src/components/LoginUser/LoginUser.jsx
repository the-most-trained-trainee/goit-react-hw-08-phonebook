import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div>
      <h1>LogIn Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={scheme}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
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
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginUser;
