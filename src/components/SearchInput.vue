<script setup>

import SearchIcon from '@/components/icons/search-icon.vue'

</script>

<template>

  <section aria-label="search section">
    <label for="search">
      <div class="bg-white flex items-center gap-3 px-3 py-2 rounded-full shadow-inner">
        <SearchIcon class="w-4 h-4" svgColor="#DC0A2D" />
        <input
          type="text"
          name=""
          placeholder="Pesquisar"
          id="search"
          class="w-full"
        />
      </div>
    </label>
  </section>

</template>

<style>

</style>