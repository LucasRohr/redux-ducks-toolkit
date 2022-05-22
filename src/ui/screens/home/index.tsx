import React from 'react';
import {TouchableOpacity, View, TextInput, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ShoppingItemModel} from '../../../models';
import {shoppingActions} from '../../../store/modules';

export function HomeScreen() {
  const dispatch = useDispatch();

  const currentSearch = useSelector(state => state?.shopping.currentSearch);
  const shoppingList = useSelector(state => state?.shopping.shoppingList);

  function onChangeSearch(searchText: string) {
    dispatch(shoppingActions.updateSearch(searchText));
  }

  function onAddToListButtonPress() {
    const newShoppingItem = new ShoppingItemModel({
      id: Math.random(),
      name: currentSearch,
    });

    dispatch(shoppingActions.addToShoppingList(newShoppingItem));
  }

  function renderShoppingList() {
    return shoppingList?.map((shoppingItem: ShoppingItemModel) => (
      <View>
        <Text>{`ID ${shoppingItem?.id} - ${shoppingItem?.name}`}</Text>
      </View>
    ));
  }

  return (
    <View>
      <TextInput onChangeText={onChangeSearch} value={currentSearch} />
      <TouchableOpacity onPress={onAddToListButtonPress}>
        <Text>Adicionar na lista</Text>
      </TouchableOpacity>

      {renderShoppingList()}
    </View>
  );
}
