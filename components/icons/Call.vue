<template>
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
    :width="props.size"
    :height="props.size"
  >
    <path
      d="M4.20996 0.5H10.3232C11.8353 0.50006 13.2045 1.36319 13.8633 2.70508L13.9854 2.97949L16.3301 8.83691C16.8343 10.0975 16.6514 11.5227 15.8623 12.6133L15.6963 12.8271L14.4355 14.3389C12.7983 16.3036 12.9318 19.192 14.7393 21L18.9971 25.2617C20.8053 27.07 23.6958 27.2002 25.6602 25.5635H25.6611L27.1719 24.3018L27.1729 24.3027C28.2857 23.3753 29.8169 23.1328 31.1621 23.6709L37.0205 26.0137C38.518 26.6127 39.5 28.0628 39.5 29.6758L39.499 35.7891C39.499 37.8384 37.8381 39.5 35.7891 39.5C16.2997 39.5 0.5 23.6998 0.5 4.20996C0.500061 2.16095 2.16094 0.500247 4.20996 0.5Z"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({
    name: "Call",
    inheritAttrs: false,
  });

  const props = withDefaults(
    defineProps<{
      size?: string | number;
    }>(),
    {
      size: 24,
    },
  );
</script>
