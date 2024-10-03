import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productSlice';
import likeReducer from '../features/like/likeSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    like: likeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
