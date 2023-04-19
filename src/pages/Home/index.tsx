import { useState } from 'react';
import { BuyBox } from '../../components/BuyBox';

import { useProducts } from '../../hooks/useProducts';
import { Header, HeroBanner, ProductCard, Select } from '../../components';
import { IProduct } from '../../types/product';

import { GridBuyBox, GridContainer, GridProducts } from './styles';

interface SortOptions {
  type: string;
  direction: string;
}

const productsFilterOptions = [
  {
    label: 'Title - A to Z',
    value: 'price-asc',
  },
  {
    label: 'Title - Z to A',
    value: 'price-desc',
  },
  {
    label: 'Highest Price',
    value: 'title-asc',
  },
  {
    label: 'Lowest Price',
    value: 'title-desc',
  },
];

export const Home = () => {
  const { loadingProducts, products } = useProducts();
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

  if (loadingProducts) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <HeroBanner />
      <GridContainer>
        <div>
          <div>
            <Select
              onChange={handleSortChange}
              options={productsFilterOptions}
              value={`${sortOptions.type}-${sortOptions.direction}`}
            />
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
    </>
  );
};
