import { configureStore } from '@reduxjs/toolkit';
import { ContactsSlice } from './constactSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { FilterSlice } from './filterSlice';
import { authSlice } from './authSlice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
export const store = configureStore({
  reducer: {
    contacts: ContactsSlice.reducer,
    filter: FilterSlice.reducer,
    auth: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
