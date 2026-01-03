<template>
  <div class="px-2">
  <div class="font-['Lora'] font-normal lg:text-5xl p-[72px] w-[500px]">{{ title }}</div>
    <div class="flex flex-wrap justify-center items-stretch px-[72px]">
      <div v-for="(item, index) in text" :key="index" class="flex">
        <div class="border border-white/20 p-[24px] m-[16px] w-[320px] border-l-[5px] flex-1">
          <div class="font-['Lora'] font-normal lg:text-3xl">{{item.title}}</div>
          <div class="font-medium lg:text-sm mt-3">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  title: string;
  text: { title: string, description: string }[];
}>();
</script>

<style scoped></style>