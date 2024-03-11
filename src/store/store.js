import { configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './contacts/sliceContacts';
import { filterReducer } from './filter/sliceFilter';
import { authReducer } from './auth/authSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root/rootSlice';
const persistConfig = {
  key: 'contact',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const reducer = {
  contacts: contactReducer,
  filter: filterReducer,
  auth: persistedReducer,
  root: rootReducer,
};

export const store = configureStore({ reducer });
export const persistor = persistStore(store);
