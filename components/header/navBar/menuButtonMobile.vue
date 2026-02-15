<template>
  <div class="absolute inset-y-0 left-0 flex items-center sm:hidden z-50">
    <button
      type="button"
      class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white"
      @click="toggleMenu"
    >
      <svg
        class="size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        :class="[modelValue ? 'hidden' : 'block']"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <svg
        class="size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
        :class="[modelValue ? 'block' : 'hidden']"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
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