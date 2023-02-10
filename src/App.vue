<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerComponent from './components/HeaderComponent.vue';

</script>

<template>
  <div class="h-screen flex flex-col bg-primary">
    <headerComponent class="mx-auto" />
  
    <Suspense>
      <RouterView class="flex-1 mx-auto" />

      <!-- loading state via #fallback slot -->
      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
</style>
