import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todos/todoSlice';
import cartReducer from './carts/card-slice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    cart: cartReducer
  }
});

export default store;
