import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ShoppingItemModel} from '../../../models';
import {ShoppingStateInterface} from './types';

const initialState: ShoppingStateInterface = {
  currentSearch: '',
  shoppingList: [],
  favoritesList: [],
  isLoading: false,
};

const reducers = {
  updateSearch: (
    state: ShoppingStateInterface,
    action: PayloadAction<string>,
  ) => {
    state.currentSearch = action.payload;
  },

  addToShoppingList: (
    state: ShoppingStateInterface,
    action: PayloadAction<ShoppingItemModel>,
  ) => {
    const currentShoppingList = [...state.shoppingList];
    const newItem = action.payload;

    state.shoppingList = [...currentShoppingList, newItem];
  },

  addToFavoritesList: (
    state: ShoppingStateInterface,
    action: PayloadAction<ShoppingItemModel>,
  ) => {
    const currentFavoritesList = [...state.favoritesList];
    const newItem = action.payload;

    state.favoritesList = [...currentFavoritesList, newItem];
  },

  setIsLoading: (
    state: ShoppingStateInterface,
    action: PayloadAction<boolean>,
  ) => {
    state.isLoading = action.payload;
  },
};

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers,
});

export const shoppingActions = shoppingSlice.actions;

export const shoppingReducer = shoppingSlice.reducer;
