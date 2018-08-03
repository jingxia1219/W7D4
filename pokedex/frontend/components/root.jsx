import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetail from './pokemon/pokemon_detail';

const Root = ({ store }) => (
  <Provider store={ store }>
     <HashRouter>
    <div>
      <div>Hello, world!</div>
      <Route path="/" component={PokemonIndexContainer} />
      <Route path="/pokemon/:pokemonId" component={PokemonDetail}/>
    </div>
     </HashRouter>
  </Provider>
);

export default Root;
