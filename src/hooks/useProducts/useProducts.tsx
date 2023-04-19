import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { useGetProductsQuery } from '../../redux/products';

export const useProducts = () => {
  const { isLoading } = useGetProductsQuery();
  const products = useSelector((state: RootState) => state.products);

  return {
    products,
    loadingProducts: isLoading,
  };
};
