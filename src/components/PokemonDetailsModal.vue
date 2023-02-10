<script setup>

import PokemonTypeBadge from './PokemonTypeBadge.vue';
import ChevronLeftIcon from '@/components/icons/chevron-left-icon.vue';
import evolutionLine from '@/components/modalComponents/evolutionLine.vue';
import { usePokemonModalStore } from '@/stores/pokemonModal';
import { getEvolution, getPokemonByName } from '@/utils/api'
import { onBeforeMount, ref } from 'vue';

defineProps({
  closeModal: {
    type: Function,
    required: true
  }
})

const pokemonModalStore = usePokemonModalStore();

console.log(pokemonModalStore.pokemon)

const primaryEvoLevel = ref(0);
const primaryEvo = ref({});
const secondaryEvoLevel = ref(0);
const secondaryEvo = ref({});


onBeforeMount(async () => {
  const evolutions = await getEvolution(pokemonModalStore.pokemon.species.url);
  primaryEvoLevel.value = evolutions.chain.evolves_to[0].evolution_details[0].min_level;
  primaryEvo.value = await getPokemonByName(evolutions.chain.evolves_to[0].species.name);
  secondaryEvoLevel.value = evolutions.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level;
  secondaryEvo.value = await getPokemonByName(evolutions.chain.evolves_to[0].evolves_to[0].species.name);

  console.log(evolutions, secondaryEvo)
});

const bgTypeColor = {
  bug: 'bg-pokemonType-bug',
  dark: 'bg-pokemonType-dark',
  dragon: 'bg-pokemonType-dragon',
  electric: 'bg-pokemonType-electric',
  fairy: 'bg-pokemonType-fairy',
  fighting: 'bg-pokemonType-fighting',
  fire: 'bg-pokemonType-fire',
  flying: 'bg-pokemonType-flying',
  ghost: 'bg-pokemonType-ghost',
  grass: 'bg-pokemonType-grass',
  ground: 'bg-pokemonType-ground',
  ice: 'bg-pokemonType-ice',
  normal: 'bg-pokemonType-normal',
  poison: 'bg-pokemonType-poison',
  psychic: 'bg-pokemonType-psychic',
  rock: 'bg-pokemonType-rock',
  steel: 'bg-pokemonType-steel',
  water: 'bg-pokemonType-water'
}

</script>

<template>
  <div :class="bgTypeColor[pokemonModalStore.pokemonTypes[0]]" class="container flex flex-col gap-4 h-full mx-auto">

    <div class="flex flex-row justify-between pt-6 p-4">
      <button @click="closeModal">
        <ChevronLeftIcon class="w-5 h-5 fill-white" />
      </button>
      <button class="h-5 w-5 invert">
        <img src="@/assets/favorite-icon.png" alt="like image">
      </button>
    </div>

    <div class="flex flex-col gap-4 px-4">
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold text-white">{{ pokemonModalStore.pokemon.name }}</h2>
        <div>
            <pokemon-type-badge 
              v-for="typePokemon in pokemonModalStore.pokemonTypes"
              :key="typePokemon + pokemonModalStore.pokemon.name"
              :type="typePokemon" 
              class="pr-2"
            />
          </div>
      </div>

    </div>

    <div class="flex flex-col items-center flex-grow h-28 gap-3">
      <img class="h-1/4" :src="pokemonModalStore.pokemonImageUrl" alt="">
    
      <div class="container flex flex-col gap-2 bg-grayscale-background rounded-t-2xl overflow-scroll flex-grow p-4">
        
        <!-- evolucoes -->
        <h3 class="text-xl font-bold">Evoluções</h3>

        <div class="flex flex-col flex-grow justify-around">

          <!-- linhas de evolucao -->
          
          <evolution-line :antecessor="pokemonModalStore.pokemon" :level="primaryEvoLevel" :sucessor="primaryEvo" />

          <evolution-line :antecessor="primaryEvo" :level="secondaryEvoLevel" :sucessor="secondaryEvo" />
          
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
