import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import * as Yup from 'yup';
import {
  Form,
  ErrorMessage,
  FormField,
  Button,
} from 'components/ContactForm/ContactForm.styled';

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
        <FormField>
          Email
          <Field name="email" />
          <ErrorMessage name="email" component="p" />
        </FormField>
        <FormField>
          Password
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="p" />
        </FormField>
        <Button type="submit">Log in</Button>
      </Form>
    </Formik>
  );
};
