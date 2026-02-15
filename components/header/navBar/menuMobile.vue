<template>
  <div
    class="md:hidden bg-black fixed h-[100vh] top-[-100px] right-[0px] w-full z-40 duration-300 opacity-0 invisible pt-[70px] overflow-y-auto"
    :class="{'visible-menu' : isOpenMenu}"
  >
    <div class="space-y-1 px-2 pb-3 pt-8">
      <NuxtLink
        v-for="(item, ind) in items"
        :key="ind"
        :class="[item.key === $route.name ? 'nav-link-active' : 'nav-link']"
        :to="item.path"
      >
        {{ item.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isOpenMenu: boolean;
  items: { name: string, path: string, key: string }[];
}>();
</script>

<style scoped lang="postcss">
.nav-link-active,
.nav-link {
  @apply block rounded-md px-3 py-2 text-xl font-medium;
}

.nav-link-active {
  @apply bg-gray-900 text-white;
}

.nav-link {
  @apply text-gray-400;
}

.nav-link:hover:not(.nav-link-active) {
  @apply hover:bg-gray-700 hover:text-white;
}

.visible-menu {
  @apply visible top-0 opacity-100;
}
</style>