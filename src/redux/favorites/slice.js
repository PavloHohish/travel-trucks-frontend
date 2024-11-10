import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const exists = state.favorites.some(
        favorite => favorite.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
