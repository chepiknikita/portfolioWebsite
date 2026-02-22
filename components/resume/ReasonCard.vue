<template>
  <div class="border border-white/40 p-7 lg:p-8 2xl:p-10 w-full">
    <h3 class="font-lora font-normal text-xl md:text-base lg:text-2xl 2xl:text-3xl pb-4 lg:pb-6 2xl:pb-8 leading-5">{{ title }}</h3>
    <p class="font-normal text-sm lg:text-base 2xl:text-xl">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>
