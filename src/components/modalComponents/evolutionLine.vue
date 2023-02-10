<script setup>

defineProps({
  antecessor: {
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

  <div class="flex flex-col gap-1">
    <img class="w-20 h-20 bg-grayscale-light rounded-full p-2" :src="antecessor?.sprites?.other.dream_world.front_default" alt="">
    <div class="flex flex-col gap-2">
      <h4 class="text-base font-bold">{{ antecessor.name }}</h4>
      <p class="text-sm text-grayscale-medium">Grass / Poison</p>
    </div>
  </div>

  <div class="flex flex-col items-center gap-1">
    <span>
      <img class="w-10 h-10" src="@/assets/arrow-right.png" alt="">
    </span>
    <span>Lvl {{ level }}</span>
  </div>

  <div class="flex flex-col gap-1">
    <img class="w-20 h-20 bg-grayscale-light rounded-full p-2" :src="sucessor?.sprites?.other.dream_world.front_default" alt="">
    <div class="flex flex-col gap-2">
      <h4 class="text-base font-bold">{{ sucessor.name }}</h4>
      <p class="text-sm text-grayscale-medium">Grass / Poison</p>
    </div>
  </div>

</div>

</template>