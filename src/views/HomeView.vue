<script setup>
import { ref } from 'vue';
import PokemonCard from '@/components/PokemonCard.vue'
import PokemonDetailsModal from '@/components/PokemonDetailsModal.vue'
import { getPokemons } from '@/utils/api';

const openModal = ref(false);

const openModalHandler = () => {
  openModal.value = true;
}

const closeModalHandler = () => {
  openModal.value = false;
}

const pokemons = ref((await getPokemons()).results); // lista de pokemons


console.log(pokemons.value)


</script>

<template>
  <main class="container p-2 bg-primary">

    <section 
      v-if="!openModal"
      aria-label="pokemon cards" 
      class="container max-h-[calc(100vh-104px)] overflow-scroll p-3 z-0 grid grid-cols-1 sm:grid-cols-3 gap-2 h-full bg-grayscale-background rounded-lg shadow-inner"
    >
        <PokemonCard 
          v-for="pokemon in pokemons"
          :key="pokemon.name"
          :pokemon="pokemon"
          @click="openModalHandler"
        />
    </section>

    <section aria-label="pokemon details" :class="openModal ? 'top-0' : 'top-full'" class="transition-all ease-out delay-300 duration-500 fixed top-0 left-0 w-screen h-screen z-50 overflow-hidden">
      <PokemonDetailsModal :close-modal="closeModalHandler" v-if="openModal" />
    </section>

  </main>
</template>
