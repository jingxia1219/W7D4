import { RECEIVE_POKEMON_ITEMS } from '../actions/item_actions';
import { merge } from 'lodash';

const itemsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_SINGLE_POKEMON:
      return merge({}, state, action.items);
    default:
      return state;
  }
};

export default itemsReducer;
