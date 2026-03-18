<template>
  <header class="relative flex-none">
    <nav
      class="absolute left-0 right-0 top-0 z-10 border-b-[1px] border-white/20"
      :class="scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'"
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
  import { navItems } from "~/config/navigation";
  import { useBodyScroll } from "~/composables/useBodyScroll";

  const isOpenMenu = ref<boolean>(false);
  const menuItems = navItems;

  useBodyScroll(isOpenMenu);

  const scrolled = ref(false);

  const handleScroll = () => {
    scrolled.value = window.scrollY > 40;
  };

  onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }));
  onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<style scoped></style>
