<script setup>
import { onBeforeMount, ref } from 'vue';
import PokeballIcon from '@/components/icons/Pokeball-icon.vue';
import PokemonTypeBadge from './PokemonTypeBadge.vue';
import { getPokemonByName } from '../utils/api';
import { usePokemonModalStore } from '@/stores/pokemonModal';


const props = defineProps({
  pokemon: {
    type: Object,
    required: true
  },
  openModal: {
    type: Function,
    required: true
  }
})

const types = ref([]);
const pokemonDetails = ref({});
const pokemonImageUrl = ref('');

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

onBeforeMount(async () => {
  const pokemon = await getPokemonByName(props.pokemon.name);
  pokemonDetails.value = pokemon;
  types.value = pokemon.types.map(type => type.type.name);
  pokemonImageUrl.value = pokemon.sprites.other.dream_world.front_default;
  // pokemonImageUrl.value = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails.value.id}.svg`;
})

//valores passados para o modal de detalhes
const PokemonModalStore = usePokemonModalStore();
const openDetails = () => {
  PokemonModalStore.pokemon = pokemonDetails;
  PokemonModalStore.pokemonTypes = types;
  PokemonModalStore.pokemonImageUrl = pokemonImageUrl;
  props.openModal();
}

</script>

<template>
  <article
    :class="bgTypeColor[types[0]]"
    class="custom_bg-opacity backdrop-opacity-50 p-2 z-30 max-h-[150px] flex-grow rounded-xl shadow-lg shadow-black cursor-pointer"
    title="pokemon card"
    @click="openDetails"
  >
      
      <div class="flex justify-evenly gap-5 ">
        <div class="flex flex-col items-center justify-evenly">
          <h2 class="text-xl font-bold text-white">{{ pokemonDetails.name }}</h2>
          <div>
            <pokemon-type-badge 
              v-for="typePokemon in types"
              :key="typePokemon + pokemonDetails.name"
              :type="typePokemon" 
              class="pr-2"
            />
          </div>
        </div>
  
        <div class="relative">
          <img 
            :src="pokemonImageUrl" 
            :alt="pokemonDetails.name ?? 'pokemon image'"
            class="w-20 h-20 z-20"
          >
        </div>
      </div>

  </article>

</template>

<style scoped>

.custom_bg-opacity {
  --tw-bg-opacity: 0.8;
}

</style>