import {STACKS} from '../../../constants';

const {MAIN_STACK} = STACKS;
const {HOME, FAVORITES} = MAIN_STACK.SCREENS;

export type HomeStackParamList = {
  [HOME.NAME]: undefined;
  [FAVORITES.NAME]: undefined;
};
