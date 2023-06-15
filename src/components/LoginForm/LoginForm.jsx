import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email')
    .required('Enter an email address'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters long')
    .required('Enter a password'),
});
export const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmitFormik = (valuesFormik, actionsFormik) => {
    dispatch(logIn(valuesFormik));
    actionsFormik.resetForm({
      valuesFormik: { email: '', password: '' },
    });
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        onSubmitFormik(values, actions);
      }}
    >
      <Form>
        <label>
          Email
          <Field name="email" />
          <ErrorMessage name="email" component="p" />
        </label>
        <label>
          Password
          <Field name="password" />
          <ErrorMessage name="password" component="p" />
        </label>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};
