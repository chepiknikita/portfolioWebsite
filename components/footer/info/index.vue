<template>
  <footer>
    <!-- <section>
      <div class="border-b-[1px] border-t-[1px] border-white/30">
        <div class="mx-auto p-14 sm:p-16 lg:p-20 grid justify-center">
          <div class="grid grid-flow-row gap-4 items-center justify-center sm:grid-flow-col sm:grid-cols-[1fr_3fr_1fr]">
            <FooterInfoContacts :items="['hello@nikitachepik.ru', '89005001020']"/>
            <Logo/>
            <div class="grid grid-flow-col gap-4 sm:gap-8 justify-center cursor-pointer">
              <span
                v-for="(icon, ind) in icons"
                :key="ind"
                class="h-5 w-5"
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
          </div>
        </div>
      </div>
    </section>
    <div class="flex text-xs">
      <div class="mx-auto p-10 sm:p-14 lg:p-16 grid grid-flow-row gap-4 items-center">
        <p class="text-[#7F7679]">
          &copy <span>2024</span> Nikita Chepik. Все права защищены.
        </p>
        <p class="text-[#B8B799] grid gap-6 grid-flow-col">
          <NuxtLink>Просмотреть правила</NuxtLink>
          <NuxtLink>Приватная политика</NuxtLink>
        </p>
      </div>
    </div> -->
    <section>

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