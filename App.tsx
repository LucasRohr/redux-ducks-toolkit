import React from 'react';

import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {App} from './src';
import Store from './src/store';

export default function IndexBase() {
  return (
    <ReduxProvider store={Store.getStore()}>
      <PersistGate persistor={Store.getPersistor()}>
        <App />
      </PersistGate>
    </ReduxProvider>
  );
}
