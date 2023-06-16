import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Button, UserWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);
  return (
    <UserWrapper>
      <p>Welcome, {name}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </UserWrapper>
  );
};
