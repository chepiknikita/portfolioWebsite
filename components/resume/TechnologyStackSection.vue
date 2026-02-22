<template>
  <section class="px-3 sm:px-10 lg:px-20 2xl:px-32">
    <div class="md:flex justify-between">
      <h2 class="flex-auto font-lora font-normal text-2xl sm:text-4xl 2xl:text-5xl md:text-left">{{ title }}</h2>
      <p class="flex-1 font-manrope font-normal my-4 text-sm md:my-0 md:text-right md:text-xs lg:text-sm 2xl:text-xl">{{ description }}</p>
      <button
        @click="openStack"
        class="md:hidden text-manrope font-medium bg-transparent hover:bg-brand-brown text-sm 2xl:text-2xl uppercase hover:text-white py-6 lg:py-8 xl:py-10 my-4 w-full border border-brand-brown">
      Ознакомиться со стеком
      </button>
    </div>

    <div class="hidden md:grid md:grid-cols-9 md:mt-12 md:gap-6 lg:mt-16 2xl:mt-24 2xl:gap-8">
      <div v-for="(img, ind) in images" :key="ind" class="flex justify-center">
        <div class="h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20 2xl:h-32 2xl:w-32">
          <NuxtImg :src="`${img}.svg`" />
        </div>
      </div>  
    </div>

  <div
    class="md:hidden bg-black fixed h-full top-0 right-0 py-20 px-10 w-full z-40 duration-300 opacity-0 invisible overflow"
    :class="{'visible-menu' : isOpenMenu}"
  >
    <div class="absolute top-8 right-10">
      <div class="h-4 w-4" @click="closeStack">
        <NuxtImg src="close.svg" class="size-full" />
      </div>
    </div>
    <div class="grid grid-cols-5 gap-4">
      <div v-for="(img, ind) in images" :key="ind" class="flex justify-center">
        <div class="h-10 w-10 sm:h-14 sm:w-14">
          <NuxtImg :src="`${img}.svg`" />
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

defineProps<{
  title: string,
  description: string,
  images: string[]
}>()

const isOpenMenu = ref<boolean>(false);

const openStack = () => {
  isOpenMenu.value = true;
}

const closeStack = () => {
  isOpenMenu.value = false;
}

watch(isOpenMenu, (v) => {
  if (v) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});

</script>

<style scoped lang="postcss">
.visible-menu {
  @apply visible top-0 opacity-100;
}
</style>
