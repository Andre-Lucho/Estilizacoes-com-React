
import styled, { css } from 'styled-components';

const solid = css`
  background-color: #c0392b; /* bg-primary */
  color: white;
  border: 2px solid transparent;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3); /* shadow-button */

  &:hover {
    background-color: #9a2e22; /* hover:bg-[#9a2e22] */
  }
`;

const outline = css`
  background-color: transparent;
  color: #c0392b; /* text-primary */
  border: 2px solid #c0392b; /* border-primary */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3); /* shadow-button */

  &:hover {
    background-color: #c0392b; /* hover:bg-primary */
    color: white;
  }
`;

const ghost = css`
  background-color: transparent;
  color: #c0392b; /* text-primary */
  border: 2px solid transparent;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3); /* shadow-button */

  &:hover {
    background-color: #c0392b; /* hover:bg-primary */
    color: white;
  }
`;

const variants = {
  solid,
  outline,
  ghost,
};

export const StyledButton = styled.button`
  margin-top: 1rem;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 8rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* shadow-button-hover */
  }

  &:focus {
    outline: 2px solid #e74c3c; /* focus:outline-primary (focus-ring) */
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  ${({ variant }) => variants[variant] || solid}
`;
