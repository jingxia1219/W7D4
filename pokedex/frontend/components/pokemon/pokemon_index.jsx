import React from 'react';
import ReactDOM from 'react-dom';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    let allPokemon = this.props.pokemon.map( pokemon => <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />);
    return(
      <ul>
        { allPokemon }
      </ul>
    );
  }
}

export default PokemonIndex;
