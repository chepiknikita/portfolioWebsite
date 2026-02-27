<template>
  <header class="relatives flex-none">
    <nav
      class="absolute left-0 right-0 top-0 z-10 border-b-[1px] border-white/20"
    >
      <div class="md:mx-16 lg:mx-24 2xl:mx-32">
        <div
          class="relative h-20 md:flex md:h-24 md:items-center md:justify-between 2xl:h-32"
        >
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
  import { ref, watch } from "vue";

  const isOpenMenu = ref<boolean>(false);
  const menuItems = [
    {
      name: "Главная",
      path: "/",
      key: "index",
    },
    {
      name: "Резюме",
      path: "/resume",
      key: "resume",
    },
    {
      name: "Проекты",
      path: "/projects",
      key: "projects",
    },
  ];

  watch(isOpenMenu, (v) => {
    if (v) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });
</script>

<style scoped></style>
