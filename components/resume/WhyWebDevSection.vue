<template>
  <section class="p-10 px-3 sm:px-10 lg:p-20 2xl:p-32">
    <div class="font-lora font-normal mb-6 sm:mb-8 lg:mb-14 2xl:mb-20 text-2xl sm:text-4xl 2xl:text-5xl">{{ title }}</div>
      <div class="hidden md:grid gap-4 md:grid-cols-2 lg:gap-7">
        <ResumeReasonCard
          v-for="(item, index) in reason"
          :key="index"
          :title="item.title"
          :description="item.description"
        />
      </div>
    <ResumeCarouselMobile :slides="reason" />
  </section>
</template>

<script setup lang="ts">


defineProps<{
  title: string;
  reason: { title: string, description: string }[];
}>();
</script>

<style scoped></style>