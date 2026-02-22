<template>
  <section class="py-10 px-3 sm:px-10 lg:p-20 2xl:p-32">
    <div class="lg:flex gap-4">
      <div class="min-w-0 lg:flex-1">
        <h2 class="font-lora font-normal text-2xl sm:text-4xl lg:text-center 2xl:text-5xl">Soft Skills</h2>
        <div class="w-full my-6 sm:my-8 lg:my-14 2xl:my-20">
          <UIAccordion :items="softs" singleOpen />
        </div>
      </div>
      <div class="min-w-0 lg:flex-1">
       <h2 class="font-lora font-normal text-2xl sm:text-4xl lg:text-center 2xl:text-5xl">Hard Skills</h2>
        <div class="w-full my-6 sm:my-8 lg:my-14 2xl:my-20">
          <UIAccordion :items="hards" singleOpen />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  softs: { title: string, content: string}[],
  hards: { title: string, content: string}[]
}>()
</script>

<style scoped></style>