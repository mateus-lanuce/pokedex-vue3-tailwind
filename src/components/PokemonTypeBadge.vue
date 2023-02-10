<script setup>

defineProps({
  type: {
    type: String,
    required: true
  }
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

  <span>
    <span :class="bgTypeColor[type] + ' text-white bg-po font-bold text-sm rounded-full px-4 py-1 shadow-lg'">
      {{ type }}
    </span>
  </span>

</template>