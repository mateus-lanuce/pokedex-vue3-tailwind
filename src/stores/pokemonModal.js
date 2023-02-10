import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePokemonModalStore = defineStore('PokemonModal', () => {
  const pokemon = ref({});
  const pokemonTypes = ref([]);
  const pokemonImageUrl = ref();

  return { pokemon, pokemonTypes, pokemonImageUrl }
})
