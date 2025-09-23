import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { productData } from '../productData';
import { ProductGridContainer, ProductList } from './ProductGrid.styled';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  const renderProductCard = (product, i) => (
    <ProductCard key={product.id} product={product} i={i} />
  );

  const renderProducts = () => {
    return products.map((product, i) => renderProductCard(product, i));
  };

  return (
    <ProductGridContainer>
      <ProductList>
        {products.length > 0 ? renderProducts() : null}
      </ProductList>
    </ProductGridContainer>
  );
};

export default ProductGrid;
