<template>
  <button
    class="my-2 flex w-full items-center justify-center border border-brand-brown bg-transparent py-8 text-sm font-medium uppercase hover:bg-brand-brown hover:text-white md:py-6 lg:py-8 xl:py-10 2xl:text-2xl"
  >
    <div>{{ lable }}</div>
    <slot />
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    lable: string;
  }>();
</script>

<style scoped></style>
