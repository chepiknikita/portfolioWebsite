<template>
  <header class="flex-none relatives">
    <nav class="absolute border-b-[1px] border-white/20 top-0 left-0 z-10 right-0">
      <div class="md:mx-16 lg:mx-24 2xl:mx-32">
        <div class="relative md:flex h-20 md:h-24 2xl:h-32 md:items-center md:justify-between">
          <HeaderNavBarMenuButtonMobile v-model="isOpenMenu" />
          <HeaderNavBarMenu :items="menuItems" />
        </div>
      </div>
      <HeaderNavBarMenuMobile
        v-model="isOpenMenu"
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
    path: '/resume',
    key: 'resume',
  },
  {
    name: 'Проекты',
    path: '/projects',
    key: 'projects',
  },
]

watch(isOpenMenu, (v) => {
  if (v) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});
</script>

<style scoped></style>
