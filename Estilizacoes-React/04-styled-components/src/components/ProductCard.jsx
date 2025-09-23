import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from './GlobalContext';
import Button from './Button';
import Skeleton from './Skeleton';
import {
  Card,
  CardImage,
  CardNav,
  PromoBadge,
  FavoriteIcon,
  CardCaption,
  ProductName,
  ProductPrice,
} from './ProductCard.styled';

import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';

const ProductCard = ({ product, i }) => {
  const { favoriteProducts, toggleFavorite, darkTheme } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  const { name, image, price, id } = product;
  const isFavorite = favoriteProducts.includes(id);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getButtonVariant = (i) => {
    const variants = ['solid', 'outline', 'ghost'];
    return variants[i % 3];
  };

  if (loading) {
    return (
      <Card className={darkTheme ? 'dark' : ''}>
        <Skeleton width="100%" height="300px" />
        <CardNav>
          <Skeleton width="60px" height="20px" />
        </CardNav>
        <CardCaption className={darkTheme ? 'dark' : ''}>
          <Skeleton width="80%" height="20px" />
          <Skeleton width="60%" height="20px" />
          <Skeleton width="100px" height="48px" />
        </CardCaption>
      </Card>
    );
  }

  return (
    <Card className={darkTheme ? 'dark' : ''}>
      <CardImage src={image} alt={`imagem de ${name}`} />
      <CardNav>
        <PromoBadge>Promo</PromoBadge>
        <FavoriteIcon onClick={() => toggleFavorite(id)}>
          {isFavorite ? <TiStarFullOutline /> : <TiStarOutline />}
        </FavoriteIcon>
      </CardNav>
      <CardCaption className={darkTheme ? 'dark' : ''}>
        <ProductName>Produto: {name}</ProductName>
        <ProductPrice>Preço: R$ {price}</ProductPrice>
        <Button variant={getButtonVariant(i)}>Adicionar</Button>
      </CardCaption>
    </Card>
  );
};

export default ProductCard;
