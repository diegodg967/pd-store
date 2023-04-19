import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BuyBox } from '../../components/BuyBox';

import { ProductCard } from '../../components/ProductCard';
import { RootState } from '../../redux';
import { useGetProductsQuery } from '../../redux/products';
import { IProduct } from '../../types/product';

import { GridBuyBox, GridContainer, GridProducts } from './styles';

interface SortOptions {
  type: string;
  direction: string;
}

export const Home = () => {
  const { isLoading } = useGetProductsQuery();
  const products = useSelector((state: RootState) => state.products);
  const [sortOptions, setSortOptions] = useState<SortOptions>({
    type: 'title',
    direction: 'asc',
  });

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const [type, direction] = event.target.value.split('-');

    setSortOptions({
      type,
      direction,
    });
  };

  const sortedProducts = products.slice().sort((a: IProduct, b: IProduct) => {
    if (sortOptions.type === 'price') {
      const aPrice = Number(a.variants[0].price);
      const bPrice = Number(b.variants[0].price);

      if (sortOptions.direction === 'asc') {
        return aPrice - bPrice;
      } else {
        return bPrice - aPrice;
      }
    }

    if (sortOptions.direction === 'asc') {
      return a.title > b.title ? 1 : -1;
    } else {
      return a.title < b.title ? 1 : -1;
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <GridContainer>
      <div>
        <div>
          <select
            value={`${sortOptions.type}-${sortOptions.direction}`}
            onChange={handleSortChange}
          >
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="title-asc">Title (A to Z)</option>
            <option value="title-desc">Title (Z to A)</option>
          </select>
        </div>
        <GridProducts>
          {products &&
            sortedProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
        </GridProducts>
      </div>
      <GridBuyBox>
        <BuyBox />
      </GridBuyBox>
    </GridContainer>
  );
};
