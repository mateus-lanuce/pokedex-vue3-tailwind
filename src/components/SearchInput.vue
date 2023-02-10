<script setup>

import SearchIcon from '@/components/icons/search-icon.vue'
import { useSearchStore } from '@/stores/searchStore';
const searchStore = useSearchStore();
</script>

<template>

  <section aria-label="search section">
    <label for="search">
      <div class="bg-white flex items-center gap-3 px-3 py-2 rounded-full shadow-inner shadow-grayscale-medium">
        <SearchIcon class="w-4 h-4" svgColor="#DC0A2D" />
        <input
          type="text"
          name=""
          placeholder="Pesquise o nome do pokemon"
          id="search"
          class="w-full"
          v-model="searchStore.searchTerm"
        />
      </div>
    </label>
  </section>

</template>

<style>

</style>