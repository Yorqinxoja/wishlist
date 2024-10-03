import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikeState {
  likedProducts: number[];
}

const initialState: LikeState = {
  likedProducts: [],
};

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      if (state.likedProducts.includes(action.payload)) {
        state.likedProducts = state.likedProducts.filter(id => id !== action.payload);
      } else {
        state.likedProducts.push(action.payload);
      }
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
