<template>
  <div class="flex min-h-screen flex-col items-center justify-center px-4 text-center">
    <h1 class="font-lora text-8xl font-normal sm:text-9xl">
      {{ error.statusCode }}
    </h1>
    <p class="mt-4 text-sm uppercase tracking-widest">
      {{ message }}
    </p>
    <button
      class="mt-10 border border-brand-brown bg-transparent px-10 py-4 text-sm font-medium uppercase hover:bg-brand-brown hover:text-white"
      @click="handleError"
    >
      На главную
    </button>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{
  error: NuxtError;
}>();

const message = computed(() =>
  props.error.statusCode === 404
    ? 'Страница не найдена'
    : 'Что-то пошло не так'
);

const handleError = () => clearError({ redirect: '/' });
</script>
