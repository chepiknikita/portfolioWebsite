<template>
  <div class="border border-white/20 border-l-4 p-6 w-full lg:w-80">
    <h3 class="font-lora font-normal lg:text-3xl">{{ title }}</h3>
    <p class="font-medium lg:text-sm mt-3">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>
