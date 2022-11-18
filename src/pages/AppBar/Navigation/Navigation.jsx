import { NavItem } from './Navigation.styled';
import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import AutNav from '../AutNav/AutNav';
import UserMenu from '../UserMenu/UserMenu';
import { getIsLoggedIn } from '../../../redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Box w="100%" h="50px" display="flex" boxShadow="lg">
      <NavItem to="/contacts">Home</NavItem>
      {isLoggedIn ? <UserMenu /> : <AutNav />}
    </Box>
  );
};

export default Navigation;
