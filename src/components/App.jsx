import { Route, Routes } from 'react-router-dom';
import { getContacts } from '../redux/selectors';
import { ContactsPage } from '../pages/ContactsPage';
import { Home } from '../pages/Home';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { AppBar } from './AppBar/AppBar';
import { Navigation } from './Navigation/Navigation';

export default function App() {
  // const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);

  // useEffect(() => {
  //   if (contacts) {
  //     return;
  //   }
  //   dispatch(getContacts());
  // }, [contacts, dispatch]);
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
}
