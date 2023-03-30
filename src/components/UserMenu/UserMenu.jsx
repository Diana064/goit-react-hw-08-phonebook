import defaultAvatar from './avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from '../../redux/selectors';
import { logOut } from '../../redux/auth-operations';
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const avatar = defaultAvatar;

  return (
    <div>
      <img src={avatar} alt="" width="32" />
      <span>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </div>
  );
}
