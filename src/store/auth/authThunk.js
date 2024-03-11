import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, logInApi, logOut, signUpApi } from 'api/auth-service';

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      return await logInApi(body);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      return await logOut(getState().auth.token);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProfileThunk = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      return await getProfile(getState().auth.token);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signUpThunk = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      return await signUpApi(body);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
