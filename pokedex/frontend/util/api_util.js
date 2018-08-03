export const fetchAllPokemon = () => (
  $.ajax({
    url: "/api/pokemon",
    method: 'GET'
  })
);

export const fetchSinglePokemon = (pokemon) => (
  $.ajax({
    url: `/api/pokemon/${pokemon.id}`,
    method: 'GET'
  })
);
