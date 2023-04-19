import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { fetchApi } from './fetch';
import cartSlice from './cart/cartSlice';
import productsSlice from './products/productsSlice';

const rootReducer = combineReducers({
  cart: cartSlice,
  [fetchApi.reducerPath]: fetchApi.reducer,
  products: productsSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
