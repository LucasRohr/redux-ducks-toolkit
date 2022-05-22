import type * as ModulesTypes from './modules/types';

export * from './modules/types';

export interface RootStateInterface {
  shopping: ModulesTypes.ShoppingStateInterface;
}
