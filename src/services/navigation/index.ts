import {CommonActions, StackActions} from '@react-navigation/native';

import {
  NavigateInterface,
  NavigationServiceInterface,
  NavigatorType,
  PushInterface,
} from './types';

class _NavigationService implements NavigationServiceInterface {
  private _navigator: NavigatorType;
  private _context: string;

  constructor() {
    this._navigator = null;
    this._context = 'NavigationService';
  }

  set navigator(navigator: NavigatorType) {
    this._navigator = navigator;
  }

  get navigator(): NavigatorType {
    return this._navigator;
  }

  get context(): string {
    return this._context;
  }

  navigate(param: NavigateInterface) {
    const {screen, key, params, stack = null} = param;

    if (this.navigator) {
      if (stack) {
        this.navigator.navigate(stack.NAME, {
          screen: screen.NAME,
          key,
          params,
        });
      } else {
        this.navigator.dispatch(
          CommonActions.navigate({name: screen.NAME, key, params}),
        );
      }
    }
  }

  pushReplacement(param: PushInterface) {
    const {screen, params} = param;

    if (this.navigator) {
      this.navigator.dispatch(
        StackActions.replace(screen.NAME, {
          ...params,
        }),
      );
    }
  }

  push(param: PushInterface) {
    const {screen, params} = param;

    if (this.navigator) {
      this.navigator.dispatch(
        StackActions.push(screen.NAME, {
          ...params,
        }),
      );
    }
  }

  pop({quantity = 1}: {quantity?: number} = {}) {
    if (this.navigator) {
      this.navigator.dispatch(StackActions.pop(quantity));
    }
  }

  resetStack() {
    if (this.navigator) {
      this.navigator.dispatch(StackActions.popToTop());
    }
  }

  getCurrentRoute() {
    if (this.navigator) {
      return this.navigator.getCurrentRoute();
    }

    return null;
  }
}

export const NavigationService = new _NavigationService();
