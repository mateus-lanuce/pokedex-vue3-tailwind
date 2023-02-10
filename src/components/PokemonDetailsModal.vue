<script setup>
import ChevronLeftIcon from '@/components/icons/chevron-left-icon.vue';

defineProps({
  pokemon: {
    type: Object,
    required: false
  },
  closeModal: {
    type: Function,
    required: true
  }
})

</script>

<template>
  <div class="container flex flex-col bg-slate-400 h-full">

    <div class="flex flex-row justify-between pt-10 p-4">
      <button @click="closeModal">
        <ChevronLeftIcon class="w-5 h-5" />
      </button>
      <button class="h-5 w-5">
        <img src="@/assets/favorite-icon.png" alt="">
      </button>
    </div>

    <div class="flex flex-col gap-4 px-4">
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold text-grayscale-dark">Bulbasaur</h2>
        <p class="text-sm text-grayscale-medium">Grass / Poison</p>
      </div>

    </div>

    <div class="flex flex-col items-center flex-grow">
      <img class="h-1/2" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="">
    
      <div class="container bg-grayscale-background rounded-t-2xl h-full p-4">
        
        <!-- evolucoes -->
        <h3 class="text-xl font-bold">Evolution Chain</h3>

        <div class="flex flex-col pt-10">

          <!-- linhas de evolucao -->
          <div class="flex flex-row gap-1 items-center justify-around">

            <div class="flex flex-col gap-1">
              <img class="w-20 h-20 bg-grayscale-light rounded-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="">
              <div class="flex flex-col gap-2">
                <h4 class="text-base font-bold">Bulbasaur</h4>
                <p class="text-sm text-grayscale-medium">Grass / Poison</p>
              </div>
            </div>

            <div class="flex flex-col items-center gap-1">
              <span>
                <img class="w-10 h-10" src="@/assets/arrow-right.png" alt="">
              </span>
              <span>level</span>
            </div>

            <div class="flex flex-col gap-1">
              <img class="w-20 h-20 bg-grayscale-light rounded-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="">
              <div class="flex flex-col gap-2">
                <h4 class="text-base font-bold">Ivysaur</h4>
                <p class="text-sm text-grayscale-medium">Grass / Poison</p>
              </div>
            </div>

          </div>

          <div class="flex flex-row gap-1 items-center justify-around pt-5">

            <div class="flex flex-col gap-1">
              <img class="w-20 h-20 bg-grayscale-light rounded-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="">
              <div class="flex flex-col gap-2">
                <h4 class="text-base font-bold">Ivysaur</h4>
                <p class="text-sm text-grayscale-medium">Grass / Poison</p>
              </div>
            </div>

            <div class="flex flex-col items-center gap-1">
              <span>
                <img class="w-10 h-10" src="@/assets/arrow-right.png" alt="">
              </span>
              <span>level</span>
            </div>

            <div class="flex flex-col gap-1">
              <img class="w-20 h-20 bg-grayscale-light rounded-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="">
              <div class="flex flex-col gap-2">
                <h4 class="text-base font-bold">Venusaur</h4>
                <p class="text-sm text-grayscale-medium">Grass / Poison</p>
              </div>
            </div>

          </div>
          
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
