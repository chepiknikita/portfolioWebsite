<template>
  <div
    class="md:hidden bg-black fixed h-screen top-0 right-0 w-full z-40 duration-300 opacity-0 invisible overflow-y-auto"
    :class="{'visible-menu' : modelValue}"
  >
  <div class="flex items-center justify-between h-20 px-8 sm:px-10 z-50">
    <div class="font-lora font-normal text-3xl">NC</div>
    <div class="h-6 w-6" @click="closeMenu">
      <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.351562 0.355469L40.3392 39.8929M40.3516 0.817996L0.363941 40.3555" stroke="white"/>
      </svg>
    </div>
  </div>
    <div class="px-8 sm:px-10 pt-20 border-t-[1px] border-white/20">
      <NuxtLink
        v-for="(item, ind) in items"
        :key="ind"
        class="block py-2 text-4xl font-lora font-normal"
        :class="[item.key === $route.name ? 'nav-link-active' : 'nav-link']"
        :to="item.path"
        @click="closeMenu"
      >
        {{ item.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);

const props = defineProps<{
  modelValue: boolean;
  items: { name: string, path: string, key: string }[];
}>();

const closeMenu = () => {
  emit('update:modelValue', !props.modelValue);
};

</script>

<style scoped lang="postcss">
.nav-link-active {
  @apply text-white;
}

.nav-link {
  @apply text-white/70;
}

.nav-link:hover:not(.nav-link-active) {
  @apply hover:text-white;
}

.visible-menu {
  @apply visible top-0 opacity-100;
}
</style>