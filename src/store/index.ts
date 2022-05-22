import {Store as ReduxStore} from 'redux';
import {persistStore, Persistor} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';

import type {RootStateInterface} from './types';

const store = configureStore({
  reducer: {},
});

const persistor = persistStore(store);

export default class Store {
  static getStore(): ReduxStore<RootStateInterface> {
    return store;
  }

  static getPersistor(): Persistor {
    return persistor;
  }
}
