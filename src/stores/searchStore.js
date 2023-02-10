import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchStore', () => {
  const searchTerm = ref('');
  const pokemons = ref([]);
  const exist = ref(false);
  const offset = ref(0);

  function setPokemons(pokemon) {
    pokemons.value = pokemon;
  }

  function setExist(existValue) {
    exist.value = existValue;
  }

  function setOffset(offsetValue) {
    offset.value = offsetValue;
  }

  function incrementOffset() {
    offset.value += 20;
  }

  function decrementOffset() {
    offset.value = offset.value !== 0 ? offset.value - 20 : 0;
  }

  return { searchTerm, pokemons, setPokemons, exist, setExist, offset, incrementOffset, decrementOffset, setOffset }
})
