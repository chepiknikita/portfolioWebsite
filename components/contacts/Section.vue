<template>
  <section class="pt-8 px-4 sm:mx-auto sm:max-w-md md:max-w-full md:p-10 lg:p-20 2xl:p-24">
    <h2 class="font-lora font-normal text-2xl sm:text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl">
      Cвяжитесь со мной удобным
      <br class="block">
      способом — отвечу в ближайшее время!
    </h2>
    <div class="w-full md:flex md:justify-end">
      <div
        v-if="data"
        class="my-8 md:flex md:w-full md:justify-end md:gap-2 md:max-w-3xl lg:gap-4 lg:max-w-[824px] 2xl:max-w-[1304px]">
        <UIButton
          v-for="item in data"
          :key="item.id"
          :label="item.name"
          @on-click="() => redirect(item.url)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ContactResponseDto } from "~/server/dto/ContactResponseDto";

defineProps<{
  data: ContactResponseDto[] | null;
}>();

const redirect = (url: string) => {
  window.location.href = url;
}
</script>
