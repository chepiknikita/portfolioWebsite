<template>
  <div class="grid gap-1 text-center text-[#B8B799]">
    <div
      v-for="(name, ind) in items"
      :key="ind"
      class="cursor-default"
    >
      <div class="flex justify-center">
        <div class="footer-link relative">
          {{ name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>

<style scoped lang="postcss">
.footer-link {
  @apply after:content-[''] after:absolute after:h-[1px] after:right-0 after:bottom-0 after:w-full after:bg-[#B8B799] after:transition-colors after:duration-500 transition-colors duration-500
}
.footer-link:hover {
  @apply hover:after:content-[''] hover:after:absolute hover:after:h-[1px] hover:after:right-0 hover:after:bottom-0 hover:after:w-full hover:after:bg-white hover:after:transition-colors hover:after:duration-500 text-white transition-colors duration-500
}
</style>