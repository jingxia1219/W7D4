import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const pokemonIndexItem = ({pokemon}) => (
  <Link to={`/pokemon/${pokemon.id}`}>
    <li key={pokemon.id}>
      <img width="20" height="auto" src={pokemon.image_url}/>
      {pokemon.name}
    </li>
  </Link>
);

export default pokemonIndexItem;
