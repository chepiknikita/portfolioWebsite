<template>
  <div class="w-full">
    <div class="flex sm:items-stretch sm:justify-start">
      <div class="w-[70px]">
        <div class="logo">NC</div>
      </div>
      <div class="flex-1 flex space-x-8 justify-center">
        <NuxtLink
          v-for="(item, ind) in items"
          :key="ind"
          :class="[item.key === $route.name ? 'nav-link-active' : 'nav-link']"
          :to="item.path"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
       <div class="w-[70px]">
          <NuxtLink
            :class="['contacts' === $route.name ? 'nav-link-active' : 'nav-link']" to="/contacts"
          >
          Контакты
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  items: { name: string, path: string, key: string }[];
}>();
</script>

<style scoped lang="postcss">
.logo {
  font-family: Lora;
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  line-height: 100%;
}
  .nav-link-active,
.nav-link {
  @apply relative after:content-[''] after:absolute after:h-[2px] after:right-0 after:bottom-0 after:transition-[width] after:duration-500 py-2 text-sm font-medium;
  font-weight: 500;
  font-size: 11px;
  font-family: Manrope;
  font-style: Medium;
  line-height: 100%;
  letter-spacing: 5%;
  text-transform: uppercase;
}

.nav-link-active {
  @apply after:w-full after:bg-red-600 text-white;
}

.nav-link {
  @apply after:w-0 after:bg-red-900 text-gray-300;
}

.nav-link:hover:not(.nav-link-active) {
  @apply hover:after:content-[''] hover:after:absolute hover:after:h-[2px] hover:after:w-full hover:after:left-0 hover:after:bottom-0 hover:after:bg-red-500 hover:after:transition-[width] hover:text-white hover:after:duration-500;
}
</style>