import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../types/product';
import { fetchApi } from '../fetch/fetchApi';

const initialState: IProduct[] = [];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      fetchApi.endpoints.getProducts.matchFulfilled,
      (_, action) => {
        const parsedProducts: IProduct[] =
          action.payload?.products?.map((product) => ({
            id: product.id,
            title: product.title,
            variants: product?.variants?.map(
              ({ featured_image, id, price, title }) => ({
                id,
                featured_image: {
                  src: featured_image?.src,
                },
                price,
                title,
              })
            ),
          })) ?? [];

        return parsedProducts;
      }
    );
  },
});

export default productsSlice.reducer;
