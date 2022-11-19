import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  @media screen and (max-width: 768px) {
    display: none;
  }
  text-decoration: none;
  margin-left: 50px;
  &.active {
    color: #805ad5;
  }
  &:hover {
    text-decoration: underline;
  }
`;
