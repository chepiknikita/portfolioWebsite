<template>
  <footer>
    <section>
      <div class="border-b-[1px] border-t-[1px] border-white/30 text-sm lg:text-base">
        <div class="mx-auto p-10 sm:p-16 lg:p-24 grid justify-center">
          <div class="grid grid-flow-row gap-4 items-center justify-center md:grid-flow-col md:grid-cols-[1fr_3fr_1fr]">
            <div class="grid grid-flow-col gap-4 md:gap-2 lg:gap-4 2xl:gap-6 justify-center cursor-pointer">
              <span
                v-for="(icon, ind) in icons"
                :key="ind"
                class="h-8 w-8 md:h-6 md:w-6 lg:h-8 lg:w-8 2xl:h-12 2xl:w-12"
              >
                <NuxtLink :to="icon.link">
                  <NuxtImg
                    format="svg"
                    class="hover:fill-white hover:transition-colors hover:duration-500 transition-colors duration-500"
                    :src="`${icon.name}.svg`"
                  />
                </NuxtLink>
              </span>
            </div>
            <div class="font-lora font-normal text-4xl select-none 2xl:text-5xl text-center">NC</div>
            <FooterInfoContacts :items="['hello@nikitachepik.ru']"/>
          </div>
        </div>
      </div>
      <div class="flex text-sm lg:text-base">
        <div class="mx-auto px-4 py-8 sm:py-12 lg:p-20 text-center">
          <p class="text-white/40">&copy 2024 Nikita Chepik. Все права защищены.</p>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
const icons: { link: string, name: string }[] = [
  {
    link: '/',
    name: 'github',
  },
  {
    link: '/',
    name: 'vkontakte',
  },
  {
    link: '/',
    name: 'telegram',
  },
  {
    link: '/',
    name: 'instagram',
  },
];
</script>

<style scoped></style>