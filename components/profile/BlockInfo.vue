<template>
  <div class="grid gap-8 my-4 max-w-xs sm:mx-auto sm:max-w-md md:max-w-full md:flex md:my-10 lg:my-20 2xl:my-24"
    :class="{ 'md:flex-row-reverse': imageRight }">
    <div v-if="image" class="w-full h-96 sm:h-[576px] md:h-[496px] md:flex-1 lg:h-[624px] 2xl:h-[936px]">
      <NuxtImg
        :src="image"
        alt="image"
        class="size-full object-cover object-center"
        width="1200"
        height="900"
        format="webp"
        loading="lazy"
      />
    </div>

    <div class="md:flex-1 md:flex md:justify-center md:items-center md:flex-col">
      <div class="md:max-w-72 lg:max-w-96 2xl:max-w-[612px]">
        <h2 class="font-lora font-normal text-2xl sm:text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl">{{ title }}</h2>
        <p class="text-sm my-4 sm:text-base md:text-xs lg:text-base 2xl:text-2xl">{{ description }}</p>
        <button
          class="bg-transparent hover:bg-brand-brown font-medium text-sm 2xl:text-2xl uppercase hover:text-white py-6 lg:py-8 xl:py-10 my-4 w-full border border-brand-brown"
          @click="() => $router.push('/resume')"
        >
          Узнать подробнее
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image?: string
  imageRight?: boolean
}>()
</script>

<style scoped></style>