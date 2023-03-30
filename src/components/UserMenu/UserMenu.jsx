import defaultAvatar from './avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from '../../redux/selectors';
import { logOut } from '../../redux/auth-operations';
import { UserMenuWrapper, UserMenuButton } from './UserMenu.module';
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const avatar = defaultAvatar;

  return (
    <UserMenuWrapper>
      <img src={avatar} alt="" width="32" />
      <span>Добро пожаловать, {name}</span>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Exit
      </UserMenuButton>
    </UserMenuWrapper>
  );
}
