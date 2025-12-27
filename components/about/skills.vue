<template>
  <div class="pt-4 pb-14 px-2">
    <div class="mx-auto grid gap-4 sm:grid-cols-2 sm:gap-4 sm:px-10 lg:px-14">
      <div class="min-w-0">
        <div class="font-['Lora'] font-normal lg:text-5xl text-center mt-6 mb-10">Soft Skills</div>
        <div class="w-full">
          <UAccordion :items="itemsS" singleOpen />
        </div>
      </div>
      <div class="min-w-0">
        <div class="font-['Lora'] font-normal lg:text-5xl text-center mt-6 mb-10">Hard Skills</div>
        <div class="w-full">
          <UAccordion :items="itemsH" singleOpen />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import UAccordion from '~/components/UI/UAccordion.vue';


defineProps(['title', 'itemsS', 'itemsH']);
</script>

<style scoped></style>