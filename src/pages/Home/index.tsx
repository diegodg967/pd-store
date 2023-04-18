import { useEffect } from 'react';
import { useGetProductsQuery } from '../../redux/products';

export const Home = () => {
  const { data, isLoading } = useGetProductsQuery();

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Home!</div>;
};
