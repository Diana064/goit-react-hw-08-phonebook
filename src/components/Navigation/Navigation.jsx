import { NavLink, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Phonebook</NavLink>
      <Outlet />
    </>
  );
};
