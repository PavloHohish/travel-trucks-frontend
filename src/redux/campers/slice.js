import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, getCamperById } from './operations.js';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    currentCamper: null,
    isLoading: false,
    error: null,
    page: 1,
    perPage: 4,
    total: 0,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items = [...state.items, ...action.payload.items];
        }
        state.total = action.payload.total;
        state.page = action.payload.page;

        state.hasMore = state.items.length < action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCamper = action.payload;
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage } = campersSlice.actions;
export default campersSlice.reducer;
