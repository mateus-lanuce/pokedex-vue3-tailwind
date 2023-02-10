<script setup>
import PokeBall from '@/components/icons/Pokeball-icon.vue'
import SearchInput from '@/components/SearchInput.vue'
import chevronRightIcon from '@/components/icons/chevron-right-icon.vue';
import chevronLeftIcon from '@/components/icons/chevron-left-icon.vue';
import { getPokemonByName, getPokemons } from '@/utils/api';
import { useSearchStore } from '@/stores/searchStore';
import { watchEffect } from 'vue';

const searchStore = useSearchStore();

async function searchPokemon() {

  if (searchStore.searchTerm === '') {
    const response = await getPokemons(20, searchStore.offset);
    searchStore.setPokemons(response);
    searchStore.setExist(true);
    return;
  }

  const response = await getPokemonByName(searchStore.searchTerm);

  if (response) {
    const pokemon = [{
      name: (await getPokemonByName(searchStore.searchTerm)).name
    }];
    searchStore.setPokemons(pokemon);
    searchStore.setExist(true);
  } else {
    searchStore.setExist(false);
  }

}

async function goToInitialPage() {
  searchStore.setOffset(0);
  const response = await getPokemons(20, searchStore.offset);
  searchStore.setPokemons(response);
}

watchEffect(() => {
  searchPokemon();
})

</script>

<template>
  <header class="container flex flex-col gap-4 bg-primary px-3 py-2">
      <button class="flex items-center gap-4" @click="goToInitialPage">
        <PokeBall class="w-6 h-6 fill-white" />
        <h1 class="text-2xl font-bold text-white">Pokédex</h1>
      </button>
  
      <div class="flex gap-3">
        <button 
          class="w-10 h-10 flex justify-center items-center bg-white rounded-full shadow-inner shadow-grayscale-medium"
          @click="searchStore.decrementOffset()"
        >
          <chevronLeftIcon class="w-5 h-5 fill-primary" />
        </button>
        <SearchInput class="flex-1"/>
        <button 
          class="w-10 h-10 flex justify-center items-center bg-white rounded-full shadow-inner shadow-grayscale-medium"
          @click="searchStore.incrementOffset()"
        >
          <chevronRightIcon class="w-5 h-5 fill-primary" />
        </button>
      </div>
    </header>
</template>