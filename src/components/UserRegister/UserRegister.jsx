import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

const scheme = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().min(6).max(12).required(),
});

const initialValues = { name: '', email: '', password: '' };

const UserRegister = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div>
      <h1>Register Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={scheme}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
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
        </Form>
      </Formik>
    </div>
  );
};

export default UserRegister;
