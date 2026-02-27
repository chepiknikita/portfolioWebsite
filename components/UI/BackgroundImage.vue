<template>
  <NuxtImg
    :src="src"
    alt="image"
    class="absolute inset-0 -z-10 size-full object-cover object-center"
    width="1200"
    height="900"
    format="webp"
    loading="lazy"
  />
</template>

<script setup lang="ts">
  defineProps<{
    src: string;
  }>();
</script>

<style scoped></style>
