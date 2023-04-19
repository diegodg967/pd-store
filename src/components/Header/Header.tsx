import { useTheme } from 'styled-components';

import { ReactComponent as LogoSVG } from '../../assets/images/logo.svg';
import { useCart } from '../../hooks/useCart';
import { HeaderShopIcon } from '../Icon/HeaderShopIcon/HeaderShopIcon';
import { Price } from '../Price';

import {
  HeaderCart,
  HeaderCartBadge,
  HeaderControls,
  HeaderWrapper,
} from './styles';

export const Header = () => {
  const { count, totalPrice } = useCart();
  const theme = useTheme();

  return (
    <HeaderWrapper>
      <LogoSVG />
      <HeaderControls>
        <Price price={totalPrice} textSize={theme.fontSizes.md} />
        <HeaderCart>
          <HeaderCartBadge>{count}</HeaderCartBadge>
          <HeaderShopIcon />
        </HeaderCart>
      </HeaderControls>
    </HeaderWrapper>
  );
};
