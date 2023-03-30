import { NavLink, Outlet } from 'react-router-dom';
import { AiOutlineHome, AiOutlineBook } from 'react-icons/ai';
export const Navigation = () => {
  return (
    <>
      <NavLink to="/">
        <AiOutlineHome />
      </NavLink>
      <NavLink to="/contacts">
        <AiOutlineBook />
      </NavLink>
      <Outlet />
    </>
  );
};
