<template>
  <button class="bg-transparent hover:bg-brand-brown font-medium text-sm 2xl:text-2xl uppercase hover:text-white py-8 md:py-6 lg:py-8 xl:py-10 my-2 w-full border border-brand-brown">
    {{ lable }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  lable: string
}>()
</script>

<style scoped></style>