import { NavLink } from 'react-router-dom';
import { AuthNavWrapper } from './AuthNav.module';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <NavLink to="/login">Sign in</NavLink>
      <NavLink to="/register">Sign up</NavLink>
    </AuthNavWrapper>
  );
};
