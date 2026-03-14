<template>
  <section class="px-3 sm:px-10 lg:px-20 2xl:px-32">
    <div class="justify-between md:flex">
      <h2
        class="flex-auto font-lora text-2xl font-normal sm:text-4xl md:text-left 2xl:text-5xl"
      >
        {{ title }}
      </h2>
      <p
        class="my-4 flex-1 font-manrope text-sm font-normal md:my-0 md:text-right md:text-xs lg:text-sm 2xl:text-xl"
      >
        {{ description }}
      </p>
      <button
        @click="openStack"
        class="text-manrope my-4 w-full border border-brand-brown bg-transparent py-6 text-sm font-medium uppercase hover:bg-brand-brown hover:text-white md:hidden lg:py-8 xl:py-10 2xl:text-2xl"
      >
        Ознакомиться со стеком
      </button>
    </div>

    <div
      class="hidden md:mt-12 md:grid md:grid-cols-9 md:gap-6 lg:mt-16 2xl:mt-24 2xl:gap-8"
    >
      <div
        v-for="[name, component] in Object.entries(iconMap)"
        :key="name"
        class="flex justify-center"
      >
        <component
          :is="component"
          class="h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20 2xl:h-32 2xl:w-32"
        />
      </div>
    </div>

    <div
      class="overflow invisible fixed right-0 top-0 z-40 h-full w-full bg-black px-10 py-20 opacity-0 duration-300 md:hidden"
      :class="{ 'visible-menu': isOpenMenu }"
    >
      <div class="absolute right-10 top-8">
        <IconsClose
          class="h-4 w-4 cursor-pointer"
          @click="closeStack"
        />
      </div>
      <div class="grid grid-cols-5 gap-4">
        <div
          v-for="[name, component] in Object.entries(iconMap)"
          :key="name"
          class="flex justify-center"
        >
          <component
            :is="component"
            class="h-10 w-10 sm:h-14 sm:w-14"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { techIcons } from "~/config/icons";
  import { useBodyScroll } from "~/composables/useBodyScroll";

  defineProps<{
    title: string;
    description: string;
  }>();

  const iconMap = techIcons;

  const isOpenMenu = ref<boolean>(false);

  const openStack = () => {
    isOpenMenu.value = true;
  };

  const closeStack = () => {
    isOpenMenu.value = false;
  };

  useBodyScroll(isOpenMenu);
</script>

<style scoped lang="postcss">
  .visible-menu {
    @apply visible top-0 opacity-100;
  }
</style>
