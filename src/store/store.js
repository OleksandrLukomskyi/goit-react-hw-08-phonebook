import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './contacts/sliceContacts';
import { filterReducer } from './filter/sliceFilter';
import { authReducer } from './auth/authSlice';

const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  auth: authReducer,
});

export const store = configureStore({ reducer });
