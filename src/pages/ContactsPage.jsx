import { ContactList } from '../components/contactList/ContactList';
import { Filter } from '../components/filter/Filter';
import ContactForm from '../components/form/ContactForm';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoggedIn } from '../redux/selectors';
import { getContacts } from '../redux/operations';
import { useEffect } from 'react';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(getContacts());
  }, [contacts, dispatch]);
  return (
    <>
      <h1>Contacts page</h1>
      {isLoggedIn ? (
        <>
          <ContactForm />
          <Filter />
          <ContactList />
        </>
      ) : (
        <h1>Please sign up or sign in </h1>
      )}
    </>
  );
};
