<script setup>
import PokeBall from '@/components/icons/Pokeball-icon.vue'
import SearchInput from '@/components/SearchInput.vue'
import chevronRightIcon from './icons/chevron-right-icon.vue';

</script>

<template>
  <header class="container flex flex-col gap-4 bg-primary px-3 py-2">
      <div class="flex items-center gap-4">
        <PokeBall svgColor="#fff" class="w-6 h-6" />
        <h1 class="text-2xl font-bold text-white">Pokédex</h1>
      </div>
  
      <div class="flex gap-3">
        <SearchInput class="flex-1"/>
        <button class="w-10 h-10 flex justify-center items-center bg-white rounded-full shadow-inner shadow-grayscale-medium">
          <chevronRightIcon class="w-5 h-5 " svgColor="#DC0A2D" />
        </button>
      </div>
    </header>
</template>