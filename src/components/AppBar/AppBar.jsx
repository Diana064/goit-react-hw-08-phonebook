import { Outlet } from 'react-router-dom';
import { AuthNav } from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { AppBarWrapper, AppBarMenu } from './AppBar.module';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <AppBarWrapper>
        <AppBarMenu>
          <Navigation />
        </AppBarMenu>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBarWrapper>
      <Outlet />
    </>
  );
};
