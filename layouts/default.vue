<template>
  <div class="flex flex-col min-h-screen">
    <HeaderNavBar />
    <main class="flex-1 flex items-center justify-center">
      <slot />
    </main>
    <FooterInfo />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
