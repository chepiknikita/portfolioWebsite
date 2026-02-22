<template>
  <img
    class="absolute inset-0 -z-10 size-full object-cover object-center"
    alt="image"
    :src="src"
  />
</template>

<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<style scoped></style>