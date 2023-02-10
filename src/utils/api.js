import { Pokedex, } from "pokeapi-js-wrapper";

const P = new Pokedex();

export const getPokemonByName = async (name) => {
  let pokemon = false;
  try {
    pokemon = await P.getPokemonByName(name);
  } catch (error) {
    console.log(error)
  }
  
  return pokemon;
}

export const getPokemons = async (limit = 10, offset = 0) => {
  const pokemons = await P.getPokemonsList({ limit, offset });
  return pokemons.results;
}

export const getEvolution = async (urlSpecie) => {
  const specie = await P.resource(urlSpecie);
  const evolutionChain = await P.resource(specie.evolution_chain.url)
  return evolutionChain;
}
