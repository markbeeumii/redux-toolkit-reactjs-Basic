import { createSlice } from '@reduxjs/toolkit';

export interface IProduct {
  id: number;
  title: string;
  image: string;
  price: string;
  quantity: string;
  subtotal?: string | number;
}

const initialState = {
  carts: [] as IProduct[]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log('first',action?.payload?.price,action?.payload?.)
      const payload = {
        id: action?.payload?.id,
        title: action?.payload?.title,
        image: action?.payload?.image,
        price: action?.payload?.price,
        quantity: action?.payload?.quantity || '1',
        subtotal: (Number(action?.payload?.price) * Number(action?.payload?.quantity || 1)).toString()
      };
      const existingItemIndex = state.carts.findIndex(cart => cart.id === action?.payload?.id);

      if (existingItemIndex !== -1) {
        //console.log('Hi', state?.carts[existingItemIndex].image);
        state.carts[existingItemIndex].quantity = (Number(state.carts[existingItemIndex].quantity) + 1).toString();
        state.carts[existingItemIndex].subtotal = (
          Number(state.carts[existingItemIndex].price) *
          (Number(state.carts[existingItemIndex].quantity) + 1)
        ).toString();
      } else {
        state.carts.push({
          ...payload
        });
      }
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter(cart => cart.id !== action.payload);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
