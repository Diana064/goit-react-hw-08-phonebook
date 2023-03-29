import { NavLink, Outlet } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      <NavLink to="/login">Sign in</NavLink>
      <NavLink to="/register">Sign up</NavLink>
      <Outlet />
    </>
  );
};
