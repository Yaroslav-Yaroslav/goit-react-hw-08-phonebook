import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { MainTitle, SecondaryTitle } from './Contacts.styled';
import Loader from 'components/Loader/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />

      <Filter />
      <SecondaryTitle>Contacts</SecondaryTitle>
      {isLoading && !error && <Loader />}
      {error && <b>{error}</b>}
      <ContactList />
    </>
  );
};

export default Contacts;

// import { Toaster } from 'react-hot-toast';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { Layout } from './Layout/Layout';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contacts/operations';

// export const App = () => {
// const dispatch = useDispatch();
// const isLoading = useSelector(selectIsLoading);
// const error = useSelector(selectError);

// useEffect(() => {
//   dispatch(fetchContacts());
// }, [dispatch]);

//   return (
//     <Layout>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       {isLoading && !error && <b>Request in progress...</b>}
//       {error && <b>{error}</b>}
//       <ContactList />
//       <Toaster />
//     </Layout>
//   );
// };
