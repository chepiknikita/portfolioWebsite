<template>
  <div class="max-w-72 sm:max-w-md md:max-w-full">
    <NuxtLink :to="to" class="block relative overflow-hidden group md:h-72 lg:h-80 2xl:h-[490px] h-96">
      <UIImage :src="image" :alt="title" class="transition-transform duration-500 group-hover:scale-105 h-full w-full" />
      <div class="hidden md:flex absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-end p-3 lg:p-5">
        <span class="font-lora text-white text-xl md:text-lg lg:text-xl 2xl:text-3xl leading-tight">{{ title }}</span>
      </div>
    </NuxtLink>
    <NuxtLink :to="to" class="font-lora font-normal text-2xl py-3 block truncate md:hidden">
      {{ title }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  image: string
  to: string
}>()
</script>
