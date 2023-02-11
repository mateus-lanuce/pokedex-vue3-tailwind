<script setup>
import { ref, onBeforeMount } from 'vue';
import PokemonCard from '@/components/PokemonCard.vue'
import PokemonDetailsModal from '@/components/PokemonDetailsModal.vue'
import { useSearchStore } from '@/stores/searchStore';
import { getPokemons } from '@/utils/api';

const openModal = ref(false);

const openModalHandler = () => {
  openModal.value = true;
}

const closeModalHandler = () => {
  openModal.value = false;
}

const searchStore = useSearchStore();

onBeforeMount(async () => {
  searchStore.setPokemons(await getPokemons( 20, searchStore.offset ));
  searchStore.setExist(true);
})


</script>

<template>
  <main class="container p-2 bg-primary">

    <section 
      v-if="!openModal"
      aria-label="pokemon cards" 
      class="container max-h-[calc(100vh-104px)] overflow-scroll scroll-smooth custom_scroll p-3 z-0 h-full bg-grayscale-background rounded-lg shadow-inner"
    > 
      <div v-if="searchStore.exist" class="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <PokemonCard
          v-for="pokemon in searchStore.pokemons"
          :key="pokemon.name"
          :pokemon="pokemon"
          :openModal="openModalHandler"
          class="mt-2"
          tabindex="0"
          :aria-label="pokemon.name + ' pokemon card'"
        />
      </div>
      <div v-else>
        <p class="text-center text-2xl text-grayscale-text">Nenhum pokemon encontrado</p>
      </div>
    </section>

    <section aria-label="pokemon details" :class="openModal ? 'top-0' : 'top-full opacity-0 will-change-auto'" class="bg-grayscale-dark  will-change-scroll transition-[top] ease-in-out delay-300 duration-500 fixed top-0 left-0 w-screen h-screen z-50">
      <PokemonDetailsModal :close-modal="closeModalHandler" v-if="openModal" />
    </section>

  </main>
</template>

<style scoped>

  .custom_scroll::-webkit-scrollbar-thumb {
    border-radius: 1rem;
  }

</style>