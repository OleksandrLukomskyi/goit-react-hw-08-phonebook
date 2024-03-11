import { createSlice } from '@reduxjs/toolkit';
import { handleFulfilled, handlePending, handleRejected } from './hendlers';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    isLoading: false,
    error: '',
  },
  extraReducers: builder => {
    builder
      .addMatcher(actions => actions.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const rootReducer = rootSlice.reducer;
