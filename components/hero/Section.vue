<template>
  <section class="h-screen flex items-center justify-center">
    <slot />
    <UIBackgroundImage :src="background" />
  </section>
</template>

<script setup lang="ts">

defineProps<{
  background: string
}>()

</script>

<style lang="scss" scoped></style>