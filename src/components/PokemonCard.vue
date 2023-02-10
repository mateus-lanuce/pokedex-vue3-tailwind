<script setup>
import { onBeforeMount, ref } from 'vue';
import PokeballIcon from '@/components/icons/Pokeball-icon.vue';
import PokemonTypeBadge from './PokemonTypeBadge.vue';
import { getPokemonByName } from '../utils/api';
import typeColors from '@/utils/typeColors';


const props = defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})

const types = ref([]);
const pokemonDetails = ref({});
const pokemonImageUrl = ref('');

onBeforeMount(async () => {
  const pokemon = await getPokemonByName(props.pokemon.name);
  pokemonDetails.value = pokemon;
  types.value = pokemon.types.map(type => type.type.name);
  pokemonImageUrl.value = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails.value.id}.svg`;
})


</script>

<template>
  <article
    :class="typeColors[types[0]]"
    class="p-2 z-30 max-h-[150px] mix-blend-multiply flex-grow rounded-xl shadow-lg shadow-black cursor-pointer"
    title="pokemon card"
  >
      
      <div class="flex justify-evenly gap-5">
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
          <PokeballIcon class="w-full h-full bottom-0 -left-1 opacity-40 absolute -z-10" svgColor="#DC0A2D" />
        </div>
      </div>

  </article>

</template>

<style>
</style>