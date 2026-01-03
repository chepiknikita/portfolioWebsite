<template>
  <div class="relative h-[100vh] overflow-hidden py-24 sm:py-32 flex items-center">
    <img
      alt="resume"
      src="../../assets/resume.png"
      class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
    >
    <div class="mx-auto px-6 lg:px-8">
      <div class="mx-auto lg:mx-0">
        <h1 class="the-title-preview my-8">{{ value.title }}</h1>
        <p class="the-text-preview w-[430px]" :class="{'text-end' : isTextRight}">{{ value.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  value: { title: string, description: string };
  isTextRight?: boolean;
}>();
</script>

<style scoped lang="postcss">
</style>