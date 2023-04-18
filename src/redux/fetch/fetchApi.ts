import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProductsResponse } from '../../types/product';

export const fetchApi = createApi({
  reducerPath: 'fetch',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://efuktshirts.com',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResponse, void>({
      query: () => '/products.json',
      keepUnusedDataFor: 5 * 60 * 1000,
    }),
  }),
});

export const { useGetProductsQuery } = fetchApi;
