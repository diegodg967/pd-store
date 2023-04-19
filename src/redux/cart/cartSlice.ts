import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  price: number;
  quantity: number;
  title: string;
  variantTitle: string;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartItem[],
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItem = state.find((item) => item.id === itemId);

      if (existingItem && existingItem.quantity === 1) {
        const itemIndex = state.findIndex((item) => item.id === itemId);
        state.splice(itemIndex, 1);
      } else if (existingItem) {
        existingItem.quantity--;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
