
import styled from 'styled-components';

export const ProductGridContainer = styled.div`
  grid-area: product-grid;
  width: 95%;
  margin: 1.5rem auto;
`;

export const ProductList = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr)); /* sm:grid-cols-2 */
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* md:grid-cols-3 */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr)); /* lg:grid-cols-4 */
  }
`;
