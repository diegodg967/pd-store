import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';

import { IProduct } from '../../types/product';
import { Button } from '../Button';
import { Card } from '../Card';
import { ShopIcon } from '../Icon';
import { addItem, removeItem } from '../../redux/cart';

import defaultThumbnail from '../../assets/images/default-thumbnail.png';

import {
  ProductButtons,
  ProductDetails,
  ProductPrice,
  ProductTitle,
  ProductThumbnail,
} from './styles';
import { RootState } from '../../redux';
import { Price } from '../Price';

interface Props {
  product: IProduct;
}

export const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const thumbnail = product.variants[0].featured_image.src || defaultThumbnail;

  const isAddedToCart = useSelector((state: RootState) =>
    state.cart.some((item) => item.id === product.id)
  );

  const formattedPrice = Math.floor(Number(product.variants[0].price));

  const handleSeeMore = (event: SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();

    console.log('see more clicked!');
  };

  const handleAddToCart = (event: SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();

    dispatch(
      addItem({
        id: product.id,
        title: product.title,
        variantTitle: product.variants[0].title,
        price: Number(product.variants[0].price),
        quantity: 1,
      })
    );
  };

  const handleRemoveFromCart = (event: SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();

    dispatch(removeItem(product.id));
  };

  return (
    <Card onClick={() => console.log('product clicked!')}>
      <ProductThumbnail>
        <img src={thumbnail} />
      </ProductThumbnail>

      <ProductDetails>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>
          <Price price={formattedPrice} textSize={theme.fontSizes.xxl} />
        </ProductPrice>
      </ProductDetails>

      <ProductButtons>
        <Button
          label="See more"
          noPadding
          onClick={handleSeeMore}
          buttonType="secondary"
        />

        {isAddedToCart ? (
          <Button
            label="Remove"
            onClick={handleRemoveFromCart}
            buttonType="grey"
          />
        ) : (
          <Button
            icon={<ShopIcon />}
            label="Add to cart"
            onClick={handleAddToCart}
          />
        )}
      </ProductButtons>
    </Card>
  );
};
