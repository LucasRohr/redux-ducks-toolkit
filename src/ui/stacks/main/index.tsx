import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import type {HomeStackParamList} from './types';
import {STACKS} from '../../../constants';
import {FavoritesScreen, HomeScreen} from '../../screens';

const Stack = createStackNavigator<HomeStackParamList>();

const {MAIN_STACK} = STACKS;
const {HOME, FAVORITES} = MAIN_STACK.SCREENS;

export function MainStack(): React.ReactElement {
  const customHeaderOptions = {
    headerShown: true,
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerTransparent: false,
    // headerTitleStyle: styles.headerTitleStyle,
    // headerRightContainerStyle: styles.headerRightContainerStyle,
    headerTintColor: 'black',
  };

  return (
    <Stack.Navigator screenOptions={customHeaderOptions}>
      <Stack.Screen
        component={HomeScreen}
        name={HOME.NAME}
        options={{title: HOME.TITLE}}
      />
      <Stack.Screen
        component={FavoritesScreen}
        name={FAVORITES.NAME}
        options={{title: FAVORITES.TITLE}}
      />
    </Stack.Navigator>
  );
}
