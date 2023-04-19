import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

export const useCart = () => {
  const cartProducts = useSelector((state: RootState) => state.cart);
  const count = cartProducts.length;
  const totalPrice = cartProducts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return {
    cartProducts,
    count,
    totalPrice,
  };
};
