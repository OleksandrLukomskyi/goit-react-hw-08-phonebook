import { createSlice } from '@reduxjs/toolkit';
import {
  getProfileThunk,
  logInThunk,
  logOutThunk,
  signUpThunk,
} from './authThunk';
import { handleSingUp } from './handlers';

const initialState = {
  profile: null,
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, handleSingUp)
      .addCase(logInThunk.fulfilled, handleSingUp)
      .addCase(logOutThunk.fulfilled, state => {
        state.profile = null;
        state.token = null;
      })
      .addCase(getProfileThunk.fulfilled, handleSingUp);
  },
});

export const authReducer = authSlice.reducer;
