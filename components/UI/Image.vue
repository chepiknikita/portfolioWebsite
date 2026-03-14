<template>
  <NuxtImg
    v-if="src && !hasError"
    :src="src"
    :alt="alt ?? ''"
    class="size-full object-cover object-center"
    :width="width ?? 1200"
    :height="height ?? 900"
    format="webp"
    loading="lazy"
    @error="hasError = true"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}>();

const hasError = ref(false);

watch(
  () => props.src,
  () => {
    hasError.value = false;
  },
);
</script>
