import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  deleteContactApi,
  fetchContactsApi,
} from 'api/contacts';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',

  async (_, { rejectWithValue, getState }) => {
    try {
      return await fetchContactsApi(getState().auth.token);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue, getState }) => {
    try {
      await deleteContactApi(contactId, getState().auth.token);

      return contactId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addContactPostThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue, getState }) => {
    try {
      const addedContact = await addContactApi(
        newContact,
        getState().auth.token
      );
      return addedContact;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
