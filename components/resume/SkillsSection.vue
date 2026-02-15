<template>
  <section class="py-10 px-4">
    <div class="">
      <div class="min-w-0">
        <h2 class="font-lora font-normal text-2xl">Soft Skills</h2>
        <div class="w-full my-10">
          <UIAccordion :items="softs" singleOpen />
        </div>
      </div>
      <!-- <div class="min-w-0">
       <h2 class="font-lora font-normal lg:text-5xl text-center mt-6 mb-10">Hard Skills</h2>
        <div class="w-full">
          <UIAccordion :items="hards" singleOpen />
        </div>
      </div> -->
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