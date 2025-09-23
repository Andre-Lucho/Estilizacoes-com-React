
import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #c0392b; /* bg-primary */
  border: 2px solid #333333; /* border-card-border-light */
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* shadow-card */
  padding-bottom: 1.2rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 4px 10px 12px rgba(0, 0, 0, 0.9); /* shadow-card-hover */
  }

  &.dark {
    border-color: #e0e0e0; /* dark:border-card-border-dark */
    box-shadow: 0px 4px 10px rgba(223, 223, 223, 0.5); /* dark:shadow-dark-card */

    &:hover {
      box-shadow: 4px 6px 4px rgb(223, 223, 223, 0.9); /* dark:shadow-dark-card-hover */
    }
  }
`;

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const CardNav = styled.nav`
  position: absolute;
  z-index: 20;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
`;

export const PromoBadge = styled.span`
  background-color: #ef4444;
  color: white;
  font-size: 0.875rem;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

export const FavoriteIcon = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
  color: #f59e0b;
`;

export const CardCaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1rem;
  background-color: #f2f2f2; /* bg-card-bg-caption */
  gap: 0;
  color: #5a5a5a; /* text-card-text-light */

  &.dark {
    color: #1a1a1a; /* dark:text-card-caption-text-dark */
  }
`;

export const ProductName = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.span``;
