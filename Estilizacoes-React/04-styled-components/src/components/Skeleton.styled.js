
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SkeletonContainer = styled.div`
  animation: ${shimmer} 1.5s infinite linear;
  background-size: 200% 100%;
  background-image: linear-gradient(
    to right,
    #f0f0f0, /* from-light-skeleton-from */
    #e0e0e0, /* via-light-skeleton-via */
    #f0f0f0 /* to-light-skeleton-to */
  );
  border-radius: 4px;

  &.dark {
    background-image: linear-gradient(
      to right,
      #2a2a2a, /* dark:from-dark-skeleton-from */
      #3a3a3a, /* dark:via-dark-skeleton-via */
      #2a2a2a /* dark:to-dark-skeleton-to */
    );
  }
`;
