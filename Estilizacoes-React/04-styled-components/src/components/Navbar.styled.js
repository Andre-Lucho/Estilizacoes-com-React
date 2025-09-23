
import styled from 'styled-components';

export const NavbarContainer = styled.div`
  grid-area: navbar;
  display: flex;
  justify-content: center;
  width: 95%;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1.5rem auto 0;
  background-color: #c0392b; /* bg-primary */
  color: #d4d4d4; /* text-custom-gray */
  border-radius: 15px; /* rounded-custom */
  transition: all 0.2s ease-in-out;
  box-shadow: 0 12px 15px rgba(0, 0, 0, 0.9); /* shadow-navbar-footer-light */

  &.dark {
    color: #fff;
    box-shadow: 2px 3px 4px rgba(223, 223, 223, 0.9); /* dark:shadow-navbar-footer-dark */
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

export const NavLink = styled.a`
  padding: 10px;
`;

export const NavIcons = styled.div`
  height: 100px; /* h-[100px] */
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 25px;

  .icon {
    cursor: pointer;
    padding: 10px;
    font-size: 2.8rem;
  }
`;
