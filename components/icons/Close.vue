<template>
  <svg
    viewBox="0 0 15 15"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
    :width="props.size"
    :height="props.size"
  >
    <path
      d="M0.351562 0.355469L14.3472 14.1936M14.3516 0.517353L0.355895 14.3555"
      stroke="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({
    name: "Close",
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
