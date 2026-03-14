<template>
  <div class="flex min-h-screen items-center justify-center px-4">
    <div class="w-full max-w-xs sm:max-w-sm lg:max-w-md text-center">
      <h1 class="font-lora text-7xl font-normal sm:text-8xl lg:text-9xl">
        {{ error.statusCode }}
      </h1>
      <p class="mt-3 text-xs uppercase tracking-widest text-white/60 sm:text-sm">
        {{ message }}
      </p>
      <button
        class="mt-8 w-full border border-brand-brown bg-transparent py-4 text-sm font-medium uppercase hover:bg-brand-brown hover:text-white sm:mt-10 sm:w-auto sm:px-10"
        @click="handleError"
      >
        На главную
      </button>
    </div>
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
