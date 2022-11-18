import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SearchBar = styled.ul`
  display: flex;
  gap: 30px;
  margin-left: auto;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: #805ad5;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const List = styled.li`
  list-style-type: none;

  &:last-of-type {
    margin-right: 50px;
  }
`;
