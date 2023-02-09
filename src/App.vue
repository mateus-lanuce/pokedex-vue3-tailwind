<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PokeBall from '@/components/icons/Pokeball-icon.vue'
import SearchInput from '@/components/SearchInput.vue'
</script>

<template>
  <header class="container flex flex-col gap-2 bg-primary px-3 py-4">
    <div class="flex items-center gap-4">
      <PokeBall svgColor="#fff" class="w-6 h-6" />
      <h1 class="text-2xl font-bold text-white">Pokédex</h1>
    </div>

    <div>
      <SearchInput />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
