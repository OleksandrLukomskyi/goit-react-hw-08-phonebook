import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from 'api/api';
import { getProfile, logInApi, logOut, signUpApi } from 'api/auth-service';

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      return await logInApi(body);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await logOut();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProfileThunk = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue }) => {
    const state = rejectWithValue.getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);
    try {
      setAuthHeader(persistedToken);
      console.log('Token before fetching profile:', persistedToken);
      return await getProfile();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signUpThunk = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      return await signUpApi(body);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
