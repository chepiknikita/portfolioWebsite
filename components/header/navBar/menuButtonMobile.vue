<template>
  <div
    class="absolute inset-y-0 left-0 z-40 flex w-full items-center justify-between px-4 sm:px-8 md:hidden"
  >
    <button
      type="button"
      class="relative"
      @click="() => $router.push('/contacts')"
    >
      <IconsCall
        size="32"
        :class="[
          modelValue ? 'hidden' : 'block',
          $route.name === 'contacts'
            ? 'text-white'
            : 'text-transparent hover:text-white',
        ]"
      />
    </button>
    <button
      type="button"
      class="relative p-2"
      @click="toggleMenu"
    >
      <IconsMenu
        size="40"
        :class="[modelValue ? 'hidden' : 'block']"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(["update:modelValue"]);

  const props = defineProps<{
    modelValue: boolean;
  }>();

  const toggleMenu = () => {
    emit("update:modelValue", !props.modelValue);
  };
</script>

<style scoped></style>
