import { createSlice } from '@reduxjs/toolkit';
import {
  addContactPostThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './thunksContacts';

const sliceContacts = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContactPostThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload);
      });
  },
});

export const contactReducer = sliceContacts.reducer;
