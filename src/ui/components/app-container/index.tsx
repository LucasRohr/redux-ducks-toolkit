import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from './types';
import {STACKS_NAMES} from '../../../constants';
import {NavigationService} from '../../../services';
import {MainStack} from '../../stacks';

const RootStack = createStackNavigator<RootStackParamList>();

export function AppContainer(): React.ReactElement | null {
  const previousRouteNameRef = useRef<string>();

  function updatePreviousRouteRef() {
    previousRouteNameRef.current = NavigationService.getCurrentRoute()?.name;
  }

  function onStateChange() {
    updatePreviousRouteRef();
  }

  function onNavigationReady() {
    onStateChange();
    updatePreviousRouteRef();
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer
        ref={navigator => {
          NavigationService.navigator = navigator;
        }}
        onReady={onNavigationReady}
        onStateChange={onStateChange}>
        <RootStack.Navigator mode="modal" screenOptions={{headerShown: false}}>
          <RootStack.Screen
            component={MainStack}
            name={STACKS_NAMES.MAIN_STACK}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
