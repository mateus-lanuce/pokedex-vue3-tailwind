import { Pokedex, } from "pokeapi-js-wrapper";

const P = new Pokedex();

export const getPokemonByName = async (name) => {
  const pokemon = await P.getPokemonByName(name);
  return pokemon;
}

export const getPokemons = async (limit = 20, offset = 0) => {
  const pokemons = await P.getPokemonsList({ limit, offset });
  return pokemons;
}

export const getPokemonImageSvg = async (id) => {
  const pokemonImage = await P.resource(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`);
  return pokemonImage;
}