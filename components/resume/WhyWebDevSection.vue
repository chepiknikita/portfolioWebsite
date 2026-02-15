<template>
  <section class="px-2">
    <div class="font-lora font-normal lg:text-5xl p-8 max-w-3xl mx-auto text-center">{{ title }}</div>
    <div class="flex flex-wrap justify-center items-stretch gap-6 px-4 lg:px-20">
      <ResumeReasonCard
        v-for="(item, index) in reason"
        :key="index"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </section>
</template>

<script setup lang="ts">

defineProps<{
  title: string;
  reason: { title: string, description: string }[];
}>();
</script>

<style scoped></style>