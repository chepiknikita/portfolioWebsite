<template>
  <svg
    viewBox="0 0 64 41"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
    :width="props.size"
    :height="props.size"
  >
    <line
      x1="64"
      y1="0.5"
      y2="0.5"
      stroke="white"
    />
    <line
      x1="64"
      y1="20.5"
      x2="32"
      y2="20.5"
      stroke="white"
    />
    <line
      x1="64"
      y1="40.5"
      y2="40.5"
      stroke="white"
    />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({
    name: "Menu",
    inheritAttrs: false,
  });

  const props = withDefaults(
    defineProps<{
      size?: string | number;
    }>(),
    {
      size: 24,
    },
  );
</script>
