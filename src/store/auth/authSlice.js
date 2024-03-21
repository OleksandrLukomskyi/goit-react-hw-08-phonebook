import { createSlice } from '@reduxjs/toolkit';
import {
  logInThunk,
  logOutThunk,
  refreshProfileThunk,
  registerThunk,
} from './authThunk';
import { handleSingUp } from './handlers';

const initialState = {
  profile: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, handleSingUp)
      .addCase(logInThunk.fulfilled, handleSingUp)
      .addCase(logOutThunk.fulfilled, state => {
        state.profile = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshProfileThunk.fulfilled, (state, { payload }) => {
        state.profile = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshProfileThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(registerThunk.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
