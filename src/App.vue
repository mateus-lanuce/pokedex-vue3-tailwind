<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerComponent from './components/header-component.vue';

</script>

<template>
  <div class="h-screen flex flex-col bg-primary">
    <headerComponent class="mx-auto" />
  
    <Suspense>
      <RouterView class="flex-1 mx-auto" />
    </Suspense>
  </div>
</template>

<style scoped>
</style>
