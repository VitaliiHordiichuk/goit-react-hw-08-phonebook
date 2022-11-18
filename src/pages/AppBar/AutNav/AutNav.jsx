import { SearchBar, NavItem, List } from './AutNav.styled';

const AutNav = () => {
  return (
    <SearchBar>
      <List>
        <NavItem to="/register">Registration</NavItem>
      </List>
      <List>
        <NavItem to="/login">Log in</NavItem>
      </List>
    </SearchBar>
  );
};

export default AutNav;
