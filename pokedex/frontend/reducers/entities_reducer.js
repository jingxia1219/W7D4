import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import itemsReducer from './items_reducer';

const EntitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemsReducer
});

export default EntitiesReducer;
