
import styled from 'styled-components';

export const FooterContainer = styled.div`
  grid-area: footer;
  display: flex;
  width: 95%;
  margin: 0 auto 1rem;
  border-radius: 15px; /* rounded-custom */
  transition: all 0.2s ease-in-out;
  color: #d4d4d4; /* text-custom-gray */
  background-color: #c0392b; /* bg-primary */
  text-align: center;
  box-shadow: 0 12px 15px rgba(0, 0, 0, 0.9); /* shadow-navbar-footer-light */

  &.dark {
    color: #fff;
    box-shadow: 2px 3px 4px rgba(223, 223, 223, 0.9); /* dark:shadow-navbar-footer-dark */
  }
`;

export const FooterText = styled.p`
  margin: 0 auto;
  padding: 20px 0;
`;
