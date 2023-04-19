import { SyntheticEvent } from 'react';
import { IProduct } from '../../types/product';
import { Button } from '../Button';
import { Card } from '../Card';

import {
  ProductButtons,
  ProductDetails,
  ProductPrice,
  ProductTitle,
  ProductThumbnail,
} from './styles';

interface Props {
  product: IProduct;
}

export const ProductCard = ({ product }: Props) => {
  const handleSeeMore = (event: SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();

    console.log('see more clicked!');
  };

  const handleAddToCart = (event: SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();

    console.log('add to cart clicked!');
  };

  return (
    <Card onClick={() => console.log('product clicked!')}>
      <ProductThumbnail>
        <img src={product.variants[0].featured_image.src} />
      </ProductThumbnail>
      <ProductDetails>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{product.variants[0].price}</ProductPrice>
      </ProductDetails>
      <ProductButtons>
        <Button label="See more" onClick={handleSeeMore} />
        <Button label="Add to cart" onClick={handleAddToCart} />
      </ProductButtons>
    </Card>
  );
};
