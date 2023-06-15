import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  name: Yup.string().required('Enter a name'),
  email: Yup.string()
    .email('Must be a valid email')
    .required('Enter an email address'),
  password: Yup.string()
    .min(4, 'Password must be at least 4 characters long')
    .required('Enter a password'),
});
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const onSubmitFormik = (valuesFormik, actionsFormik) => {
    dispatch(register(valuesFormik));
    actionsFormik.resetForm({
      valuesFormik: { name: '', email: '', password: '' },
    });
  };
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={registerSchema}
      onSubmit={(values, actions) => {
        onSubmitFormik(values, actions);
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="p" />
        </label>
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
