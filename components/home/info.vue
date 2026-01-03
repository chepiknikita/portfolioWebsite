<template>
  <div class="container mx-auto px-6 py-12 sm:px-12 lg:px-16 h-[100vh] overflow-hidden">
    <div class="grid lg:grid-flow-col gap-10 mx-auto">
      <img
        alt="image"
        src="../../assets/image.png"
        class="lg:w-[450px] lg:h-[640px] bg-slate-600 size-full object-cover object-right md:object-center"
        :class="{ 'lg:order-last' : isImgRight }"
      >
      <div class="w-[510px] flex flex-col justify-center items-start pl-8">
        <div class="the-title-main py-2">
          {{ value.title }}
        </div>
        <div class="tthe-text-main mt-8">
          <p class="font-['Lora'] font-normal text-xl">
            {{ value.description }}
          </p>
        </div>
        <button
          class="bg-transparent hover:bg-[#665133] font-medium text-sm uppercase hover:text-white py-8 px-10 my-8 border border-[#665133]"
          >
            Узнать больше
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  value: { title: string, description: string };
  isImgRight?: boolean;
}>();
</script>

<style scoped></style>