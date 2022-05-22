import {ShoppingItemModelInterface} from './types';

export class ShoppingItemModel {
  id: number;
  name: string;

  constructor(params: ShoppingItemModelInterface) {
    this.id = params.id;
    this.name = params.name;
  }
}
