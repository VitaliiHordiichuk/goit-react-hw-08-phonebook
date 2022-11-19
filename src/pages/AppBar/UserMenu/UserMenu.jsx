import { SearchBar, NavItem, List, Mail } from './UserMenu.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getUserMail } from '../../../redux/auth/auth-selectors';
import { logOut } from '../../../redux/auth/auth-operations';

const UserMenu = () => {
  const name = useSelector(getUserMail);
  const dispatch = useDispatch();

  return (
    <SearchBar>
      <List>
        <Mail>{name}</Mail>
      </List>
      <List>
        <NavItem to="" onClick={() => dispatch(logOut())}>
          Logout
        </NavItem>
      </List>
    </SearchBar>
  );
};

export default UserMenu;
