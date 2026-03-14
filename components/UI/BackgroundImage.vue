<template>
  <NuxtImg
    v-if="src && !hasError"
    :src="src"
    alt=""
    class="absolute inset-0 -z-10 size-full object-cover object-center"
    width="1200"
    height="900"
    format="webp"
    loading="lazy"
    @error="hasError = true"
  />
</template>

<script setup lang="ts">
  defineProps<{
    src: string;
  }>();

  const hasError = ref(false);
</script>

<style scoped></style>
