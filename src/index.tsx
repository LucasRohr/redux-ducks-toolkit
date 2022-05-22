import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppContainer} from './ui/components';

export function App() {
  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  );
}
