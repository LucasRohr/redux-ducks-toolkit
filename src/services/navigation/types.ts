/* eslint-disable @typescript-eslint/no-explicit-any */
import {MutableRefObject} from 'react';

import {
  NavigationContainerRef,
  NavigationState,
  PartialState,
  PartialRoute,
  Route,
} from '@react-navigation/native';

export type NavigatorType = NavigationContainerRef | null;

export interface NavigationServiceInterface {
  navigator: NavigatorType;
  context: string;
}

export interface NavigateInterface {
  screen: {
    NAME: string;
  };
  key?: string;
  params?: Record<string, unknown>;
  stack?: {
    NAME: string;
  };
}

export interface PushInterface {
  screen: {
    NAME: string;
  };
  params?: Record<string, unknown>;
}

export interface OnNavigationStateChangeInterface {
  previousRouteNameRef: MutableRefObject<string | undefined>;
}

export interface GetCurrentRouteWithStackNameParamsInterface {
  state: NavigationState | PartialState<NavigationState>;
  index: number;
  father?:
    | PartialRoute<Route<string, any | undefined>>
    | Route<string, any | undefined>;
}

export interface GetCurrentRouteWithStackNameReturnInterface {
  stack: PartialRoute<Route<string, any | undefined>> | undefined;
  currentRoute:
    | PartialRoute<Route<string, any | undefined>>
    | Route<string, any | undefined>;
}
