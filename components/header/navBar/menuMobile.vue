<template>
  <div
    class="invisible fixed right-0 top-0 z-40 h-screen w-full overflow-y-auto bg-black opacity-0 duration-300 md:hidden"
    :class="{ 'visible-menu': modelValue }"
  >
    <div class="z-50 flex h-20 items-center justify-between px-8 sm:px-10">
      <div class="font-lora text-3xl font-normal">NC</div>
      <div
        class="cursor-pointer"
        @click="closeMenu"
      >
        <IconsClose
          size="24"
          class="text-white"
        />
      </div>
    </div>
    <div class="border-t-[1px] border-white/20 px-8 pt-20 sm:px-10">
      <NuxtLink
        v-for="(item, ind) in items"
        :key="ind"
        class="block py-2 font-lora text-4xl font-normal"
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
  const emit = defineEmits(["update:modelValue"]);

  const props = defineProps<{
    modelValue: boolean;
    items: { name: string; path: string; key: string }[];
  }>();

  const closeMenu = () => {
    emit("update:modelValue", !props.modelValue);
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
