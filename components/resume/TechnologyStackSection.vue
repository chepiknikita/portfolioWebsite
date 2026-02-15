<template>
  <section>
    <div class="p-[72px]">
      <div class="flex justify-between items-start mb-10">
        <h2 class="font-lora font-normal text-5xl py-2 flex-auto">{{ title }}</h2>
        <p class="flex-1 text-sm text-right font-medium">{{ description }}</p>
      </div>
  
      <div class="grid lg:grid-cols-9 gap-10 px-0">
        <div v-for="(img, ind) in images" :key="ind" class="flex justify-center">
          <div class="h-7 w-auto sm:h-28 sm:w-28">
            <NuxtImg :src="`${img}.svg`" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  description: string,
  images: string[]
}>()
</script>
