import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  &.active {
    color: #277a9d;
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
