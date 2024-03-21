import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  deleteContactApi,
  fetchContactsApi,
} from 'api/contacts';
import { refreshProfileThunk } from 'store/auth/authThunk';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',

  async (_, { rejectWithValue, dispatch }) => {
    try {
      await dispatch(refreshProfileThunk());
      return await fetchContactsApi();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await deleteContactApi(contactId);

      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addContactPostThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const addedContact = await addContactApi(newContact);
      return addedContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
