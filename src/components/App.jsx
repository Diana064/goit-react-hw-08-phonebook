import { Route, Routes } from 'react-router-dom';
import { ContactsPage } from '../pages/ContactsPage';
import { Home } from '../pages/Home';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { AppBar } from './AppBar/AppBar';
import { AppWrapper } from './App.module';

export default function App() {
  return (
    <AppWrapper>
      <AppBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </AppWrapper>
  );
}
