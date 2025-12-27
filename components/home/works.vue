<template>
  <div class="container px-6 py-16 sm:px-12 lg:px-16 mx-auto">
    <div class="flex justify-start flex-col items-center">
      <div>
      </div>
      <div class="w-[790px]">
        <NuxtLink
          to="/projects"
          class="text-sm text-[#665133] uppercase"
        >
          Просмотр проектов
        </NuxtLink>
        <div class="font-['Lora'] font-normal lg:text-5xl mt-8 py-4">
          {{ value.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  value: { title: string, description: string };
}>();
</script>

<style scoped></style>