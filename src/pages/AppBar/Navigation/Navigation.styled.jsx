import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

// export const SearchBar = styled.div`
//   top: 0;
//   left: 0;
//   position: sticky;
//   z-index: 1100;
//   display: flex;
//   gap: 30px;
//   align-items: center;
//   min-height: 64px;
//   padding-right: 24px;
//   padding-left: 24px;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
// `;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  margin-left: 50px;
  &.active {
    color: #805ad5;
  }
  &:hover {
    text-decoration: underline;
  }
`;

// export const List = styled.li`
//   list-style-type: none;

//   &:first-of-type {
//     margin-left: 50px;
//   }
//   &:last-of-type {
//     margin-right: 50px;
//   }
// `;
