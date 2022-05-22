import {ShoppingItemModel} from '../../../models';

export interface ShoppingStateInterface {
  currentSearch: string;
  shoppingList: ShoppingItemModel[];
  favoritesList: ShoppingItemModel[];
  isLoading: boolean;
}
