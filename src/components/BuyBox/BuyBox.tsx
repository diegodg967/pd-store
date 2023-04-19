import { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';

import { useCart } from '../../hooks/useCart';
import { removeItem } from '../../redux/cart';
import { Button } from '../Button';
import { Card } from '../Card';
import { DeleteIcon } from '../Icon';
import { Price } from '../Price';

import {
  BuyBoxCounter,
  BuyBoxFooter,
  BuyBoxHeader,
  BuyBoxProduct,
  BuyBoxProducts,
  BuyBoxProductContent,
  BuyBoxProductPrice,
  BuyBoxProductRemove,
  BuyBoxProductRemoveWrapper,
  BuyBoxProductTitle,
  BuyBoxProductVariantTitle,
  BuyBoxSubtotal,
  BuyBoxTitle,
  BuyBoxWrapper,
  EmptyBuyBox,
} from './styles';

export const BuyBox = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const {
    cartProducts,
    count: cartProductsCount,
    totalPrice: cartTotalPrice,
  } = useCart();

  const handleRemoveFromCart = (
    event: SyntheticEvent<HTMLDivElement>,
    productId: string
  ) => {
    event.stopPropagation();

    dispatch(removeItem(productId));
  };

  return (
    <BuyBoxWrapper>
      <Card>
        <BuyBoxHeader>
          <BuyBoxTitle>Your bag</BuyBoxTitle>
          <BuyBoxCounter>{cartProductsCount}</BuyBoxCounter>
        </BuyBoxHeader>

        <BuyBoxProducts>
          {cartProducts.map((product) => (
            <BuyBoxProduct key={product.id}>
              <BuyBoxProductContent>
                <BuyBoxProductPrice>
                  <Price price={product.price} textSize={theme.fontSizes.xl} />
                </BuyBoxProductPrice>
                <BuyBoxProductTitle>{product.title}</BuyBoxProductTitle>
                <BuyBoxProductVariantTitle>
                  {product.variantTitle}
                </BuyBoxProductVariantTitle>
              </BuyBoxProductContent>
              <BuyBoxProductRemoveWrapper>
                <BuyBoxProductRemove
                  onClick={(event) => handleRemoveFromCart(event, product.id)}
                >
                  <DeleteIcon />
                </BuyBoxProductRemove>
              </BuyBoxProductRemoveWrapper>
            </BuyBoxProduct>
          ))}
        </BuyBoxProducts>

        {!!cartTotalPrice ? (
          <BuyBoxFooter>
            <BuyBoxSubtotal>
              Subtotal:{' '}
              <Price price={cartTotalPrice} textSize={theme.fontSizes.xxl} />
            </BuyBoxSubtotal>
            <Button label="Checkout" onClick={() => {}} />
            <Button
              label="Continue shopping"
              onClick={() => {}}
              buttonType="secondary"
            />
          </BuyBoxFooter>
        ) : (
          <EmptyBuyBox>Empty</EmptyBuyBox>
        )}
      </Card>
    </BuyBoxWrapper>
  );
};
