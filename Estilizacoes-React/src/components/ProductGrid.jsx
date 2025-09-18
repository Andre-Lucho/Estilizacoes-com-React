import ProductCard from './ProductCard';
import { productImgs } from '../imgData';

import '../styles/product-grid.scss';

const ProductGrid = () => {
  return (
    <div className="product-grid">
      <ul>
        {productImgs &&
          productImgs.map((img, i) => <ProductCard imgData={img} key={i} />)}
      </ul>
    </div>
  );
};

export default ProductGrid;
