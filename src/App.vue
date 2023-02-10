<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerComponent from './components/header-component.vue';

</script>

<template>
  <div class="h-screen flex flex-col">
    <headerComponent />
  
    <Suspense>
      <RouterView class="flex-1" />
    </Suspense>
  </div>
</template>

<style scoped>
</style>
