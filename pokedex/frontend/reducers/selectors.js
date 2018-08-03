import { values } from 'lodash';

export const selectAllPokemon = (state) => values(state.entities.pokemon);

export const selectSinglePokemon = (state, pokemon) => state.entities.pokemon[pokemon.id];
