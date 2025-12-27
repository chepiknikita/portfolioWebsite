<template>
  <header class="flex-none relatives">
    <nav class="absolute border-b-[1px] border-white/20 top-0 left-0 z-10 right-0">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-[85px] items-center justify-between">
          <HeaderNavBarMenuButtonMobile v-model="isOpenMenu" />
          <HeaderNavBarMenu :items="menuItems" />
        </div>
      </div>
      <HeaderNavBarMenuMobile
        :is-open-menu="isOpenMenu"
        :items="menuItems"
      />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const isOpenMenu = ref<boolean>(false);
const menuItems = [
  {
    name: 'Главная',
    path: '/',
    key: 'index',
  },
  {
    name: 'Резюме',
    path: '/about',
    key: 'about',
  },
  {
    name: 'Проекты',
    path: '/projects',
    key: 'projects',
  },
]

watch(isOpenMenu, (v) => {
  if (v) {
    document.body.classList.add('hidden-body');
  } else {
    document.body.classList.remove('hidden-body');
  }
});
</script>

<style scoped></style>
