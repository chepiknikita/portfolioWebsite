<template>
  <div class="h-[468px] max-w-72 sm:max-w-md md:max-w-full md:h-96 2xl:h-[558px]">
    <NuxtLink :to="to" class="block h-96 md:h-72 lg:h-80 2xl:h-[490px]">
      <UIImage :src="image" :alt="title" />
    </NuxtLink>
    <NuxtLink class="font-lora font-normal text-2xl py-4 block truncate md:text-xl lg:text-2xl 2xl:text-3xl">
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

<style scoped></style>