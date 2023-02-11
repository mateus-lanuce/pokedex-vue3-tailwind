<script setup>
import { RouterView } from 'vue-router'
import headerComponent from './components/HeaderComponent.vue';

</script>

<template>

  <!-- meta tags -->
  <metainfo>

    <!-- title -->
    <template v-slot:title>Pokedex</template>

    <meta name="description" content="Simple pokedex made with Vuejs 3 and tailwind, uses PokeAPI V2 for contents" />
    <meta name="keywords" content="pokedex, pokemon, vuejs, tailwind, pokeapi" />
    <meta name="author" content="Mateus Lanuce" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="icon" href="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
    
    <!-- canonical url -->
    <link rel="canonical" href="https://pokedex-vue3-tailwind.vercel.app/" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@mateuslanuce" />
    <meta name="twitter:creator" content="@mateuslanuce" />
    <meta name="twitter:title" content="Pokedex" />
    <meta name="twitter:description" content="Simple pokedex made with Vuejs 3 and tailwind, uses PokeAPI V2 for contents" />
    <meta name="twitter:image" content="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
    <meta name="twitter:image:alt" content="Pokedex" />

    <!-- Open Graph -->
    <meta property="og:title" content="Pokedex" />
    <meta property="og:description" content="Simple pokedex made with Vuejs 3 and tailwind, uses PokeAPI V2 for contents" />
    <meta property="og:image" content="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
    <meta property="og:image:alt" content="Pokedex" />
    <meta property="og:url" content="https://pokedex-vue3-tailwind.vercel.app/" />
    <meta property="og:site_name" content="Pokedex" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:locale:alternate" content="pt_BR" />

  </metainfo>

  <div class="h-screen flex flex-col bg-primary">
    <headerComponent class="mx-auto" />
  
    <Suspense>
      <RouterView class="flex-1 mx-auto" />

      <!-- loading state via #fallback slot -->
      <template #fallback>
        Loading...
      </template>
    </Suspense>

    <footer class="flex justify-center items-center bg-primary">
      <p class="text-white">Made with ❤️ by <a href="https://www.linkedin.com/in/mateus-lanuce/" target="_blank" class="text-white underline">Mateus Lanuce</a></p>
    </footer>
  </div>
</template>

<style scoped>
</style>
