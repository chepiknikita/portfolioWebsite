<template>
  <section class="p-4 md:px-10 lg:px-12 2xl:px-16 mb-10 lg:mb-20 2xl:mb-32">
    <div class="max-w-xs sm:mx-auto sm:max-w-md md:max-w-md lg:max-w-lg 2xl:max-w-4xl">
      <NuxtLink
        to="/projects"
        class="hidden md:block md:mb-8 text-sm lg:text-base 2xl:text-2xl text-brand-brown uppercase"
      >
        Просмотр проектов
      </NuxtLink>
      <div class="font-lora font-normal text-2xl mb-4 sm:text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl">{{ text }}</div>
      <button
        class="md:hidden bg-transparent hover:bg-brand-brown font-medium text-sm 2xl:text-2xl uppercase hover:text-white py-6 lg:py-8 xl:py-10 my-4 w-full border border-brand-brown transition-colors duration-300"
        @click="() => $router.push('/projects')"
      >
        Просмотреть проекты
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<style scoped></style>