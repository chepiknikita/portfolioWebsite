<template>
  <div class="absolute inset-y-0 left-0 flex items-center md:hidden z-40 w-full justify-between px-4 sm:px-8">
    <button
      type="button"
      class="relative"
      @click="() => $router.push('/contacts')"
    >
      <div class="w-8 h-8" :class="[modelValue ? 'hidden' : 'block']">
        <img src="../../../assets/images/call.svg" alt="contacts">
      </div>
    </button>
    <button
      type="button"
      class="relative p-2"
      @click="toggleMenu"
    >
      <div
        class="h-8 w-10 flex justify-center"
        :class="[modelValue ? 'hidden' : 'block']"
      >
        <img src="../../../assets/images/menu.svg" alt="menu">
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);

const props = defineProps<{
  modelValue: boolean;
}>();

const toggleMenu = () => {
  emit('update:modelValue', !props.modelValue);
};
</script>

<style scoped></style>