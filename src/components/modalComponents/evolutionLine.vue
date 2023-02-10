<script setup>
import PokemonTypeBadge from '@/components/PokemonTypeBadge.vue';

defineProps({
  current: {
    type: Object,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  sucessor: {
    type: Object,
    required: true
  },
})

</script>

<template>

<div class="flex flex-row gap-1 items-center justify-around">

  <div class="flex flex-col items-center gap-2">
    <img class="w-20 h-20 bg-grayscale-light rounded-full p-2" :src="current?.sprites?.other.dream_world.front_default" alt="">
    <h4 class="text-base font-bold">{{ current.name }}</h4>
      <div class="flex gap-2">
        <pokemon-type-badge 
          v-for="typePokemon in current.types"
          :key="typePokemon.type.name + current.name"
          :type="typePokemon.type.name" 
        />
      </div>
  </div>

  <div class="flex flex-col items-center gap-1">
    <span>
      <img class="w-10 h-10" src="@/assets/arrow-right.png" alt="">
    </span>
    <span>Lvl {{ level }}</span>
  </div>

  <div class="flex flex-col items-center gap-2">
    <img class="w-20 h-20 bg-grayscale-light rounded-full p-2" :src="sucessor?.sprites?.other.dream_world.front_default" alt="">
    <h4 class="text-base font-bold">{{ sucessor.name }}</h4>
      <div class="flex gap-2">
        <pokemon-type-badge 
          v-for="typePokemon in sucessor.types"
          :key="typePokemon.type.name + sucessor.name"
          :type="typePokemon.type.name" 
        />
      </div>
  </div>

</div>

</template>