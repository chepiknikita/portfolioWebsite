<template>
  <div class="max-w-64 m-auto sm:max-w-lg lg:max-w-2xl 2xl:max-w-4xl">
    <h1 class="hero-title font-lora font-normal text-4xl sm:text-7xl lg:text-8xl 2xl:text-9xl mb-4">{{ title }}</h1>
    <p class="hero-description font-lora font-normal leading-none text-lg sm:text-3xl lg:text-4xl 2xl:text-6xl">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>
