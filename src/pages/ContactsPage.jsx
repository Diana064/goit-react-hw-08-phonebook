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
      <h1>This is your contacts book: </h1>
      {isLoggedIn ? (
        <>
          <ContactForm />
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Your contacts is unavailable. Please sign up or sign in! </p>
      )}
    </>
  );
};
