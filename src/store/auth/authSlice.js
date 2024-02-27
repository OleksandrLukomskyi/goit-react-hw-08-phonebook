import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getProfileThunk,
  logInThunk,
  logOutThunk,
  signUpThunk,
} from './authThunk';

const initialState = {
  access_token: '',
  isLoading: false,
  error: '',
  profile: null,
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = (state, { payload }) => {
  state.isLoading = true;
};
// const handleFulfilled = (state, {payload}) => {
//    state.isLoading = false
//    state.error = ''
//    state.access_token = payload.access_token
// }

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(getProfileThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = '';
        state.profile = payload;
      })
      .addMatcher(
        isAnyOf(logInThunk.rejected, getProfileThunk.rejected),
        handleRejected
      )
      .addMatcher(
        isAnyOf(logInThunk.pending, getProfileThunk.pending),
        handlePending
      );
  },
});

export const authReducer = authSlice.reducer;
