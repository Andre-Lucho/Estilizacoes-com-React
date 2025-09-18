const ProductCard = ({ imgData }) => {
  return (
    <li className="product-card">
      <img src={imgData} alt={`imagem de ${imgData}`} />
    </li>
  );
};

export default ProductCard;
