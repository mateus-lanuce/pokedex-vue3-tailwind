<script setup>
import { onBeforeMount, ref, watchEffect } from 'vue';

import PokemonTypeBadge from './PokemonTypeBadge.vue';
import ChevronLeftIcon from '@/components/icons/chevron-left-icon.vue';
import evolutionLine from '@/components/modalComponents/evolutionLine.vue';
import { usePokemonModalStore } from '@/stores/pokemonModal';
import { getEvolution, getPokemonByName } from '@/utils/api'

defineProps({
  closeModal: {
    type: Function,
    required: true
  }
})

const pokemonModalStore = usePokemonModalStore();
const changeDetails = ref("stats");
const evolutionsRef = ref([]);
const evolutionsLevels = ref([]);

const handleChangeDetails = (type) => {

  if (type === "stats") {
    changeDetails.value = "stats";
  } else if (type === "evolutions") {
    changeDetails.value = "evolutions";
  }

}

onBeforeMount(async () => {

  //pegar as evoluções
  const evolutions = await getEvolution(pokemonModalStore.pokemon.species.url);

  const arrayPokemons = [];

  //pegar a primeira evolução
  const primaryEvoName = evolutions.chain.species.name;
  arrayPokemons.push({name : primaryEvoName});
  evolutionsLevels.value.push(evolutions.chain.evolves_to[0]?.evolution_details[0].min_level);

  //pegar outras evoluções
  const secondaryEvoName = evolutions.chain.evolves_to[0]?.species.name;

  if (secondaryEvoName) {
    arrayPokemons.push({name : secondaryEvoName});
    evolutionsLevels.value.push(evolutions.chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0].min_level);

    const thirdEvoName = evolutions.chain.evolves_to[0]?.evolves_to[0]?.species.name;

    if (thirdEvoName) {
      arrayPokemons.push({name : thirdEvoName});
    }
  }


  const evolutionsData = await Promise.all(arrayPokemons.map(async (pokemon) => {
    const pokemonData = await getPokemonByName(pokemon.name);
    return pokemonData;
  }));

  const formattedEvolutions = []; //array de com o pokemon antecessor e o pokemon sucessor

  evolutionsData.forEach((pokemon, index) => {

    if (evolutionsData[index + 1]) {
      formattedEvolutions.push({pokemon, nextPokemon: evolutionsData[index + 1]});
    } else {
      formattedEvolutions.push({pokemon, nextPokemon: null});
    }
  })

  //retirar o ultimo pokemon do array, pois ele não tem evolução
  formattedEvolutions.pop();

  console.log(evolutionsLevels.value)

  evolutionsRef.value = formattedEvolutions;
})

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
        
        <!-- escolhas -->
        <div class="flex justify-around">
          <button :class="changeDetails == 'stats' ? 'border-b-2 border-grayscale-light' : ''" @click="handleChangeDetails('stats')" >
            <h3 class="text-xl font-bold">características</h3>
          </button>
          <button
            :class="
              changeDetails == 'evolutions'
                ? 'border-b-2 border-grayscale-light'
                : ''
            "
            @click="handleChangeDetails('evolutions')"
          >
            <h3 class="text-xl font-bold">evoluções</h3>
          </button>
        </div>


        <div v-if="changeDetails == 'stats'" class="flex flex-col flex-grow justify-evenly">

          <div 
            v-for="stats in pokemonModalStore.pokemon.stats" 
            :key="stats.stat.name"  
          >
            <span class="font-bold">{{ stats.stat.name }}</span>: {{ stats.base_stat }}
          </div>

        </div>

        <div v-if="changeDetails == 'evolutions'" class="flex flex-col flex-grow justify-evenly">

          <evolution-line
            v-for="(evolution, index) in evolutionsRef"
            :key="evolution.pokemon.name"
            :current="evolution.pokemon" 
            :level="evolutionsLevels[index]"
            :sucessor="evolution.nextPokemon" 
          />

        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
