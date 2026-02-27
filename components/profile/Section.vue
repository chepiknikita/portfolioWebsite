<template>
  <section class="pt-8 px-4 md:px-10 md:py-0 lg:px-20 2xl:px-24">
    <ProfileBlockInfo
      v-for="block in sections"
      :key="block.id"
      :image-right="block.imagePosition === 'RIGHT'"
      :title="block.title"
      :description="block.description"
      :image="block.image"
    />
  </section>
</template>

<script setup lang="ts">
import { HomeResponseDto } from '~/server/dto/HomeResponseDto';

defineProps<{
  sections: HomeResponseDto[];
}>();
</script>

<style lang="scss" scoped></style>