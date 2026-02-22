<template>
  <section class="py-8 px-4 size-full md:px-10 lg:px-20 2xl:px-24">
    <div class="text-center my-24 md:my-28 lg:my-32">
      <h1 class="font-lora font-normal text-4xl sm:text-7xl lg:text-8xl 2xl:text-9xl">Биржа</h1>
    </div>

    <div class="w-full h-96 sm:h-[576px] md:h-[496px] lg:h-[624px] 2xl:h-[936px]">
      <img alt="image" src="../../assets/resume.png" class="size-full object-cover object-center">
    </div>

    <div class="md:flex md:justify-center">
      <div class="my-8 md:py-10 lg:py-20 2xl:py-32 md:max-w-lg lg:max-w-2xl 2xl:max-w-5xl">
        <h2 class="font-lora font-normal text-2xl sm:text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl">Описание проекта:</h2>
        <p class="text-sm my-4 sm:text-base md:text-xs lg:text-base 2xl:text-2xl">Инвестиционная биржа — это онлайн-платформа, объединяющая инвесторов и авторов проектов (стартапы, малый бизнес) для безопасного и прозрачного привлечения финансирования. На сайте реализованы личные кабинеты, каталог проектов с фильтрами, система безопасных сделок через эскроу, встроенный документооборот, аналитика и рейтинги, а также инструменты для коммуникации. Платформа обеспечивает автоматизацию процессов, снижает риски за счёт экспертизы и проверки проектов, предоставляя пользователям удобный доступ к инвестиционным возможностям.</p>
        <UIButton lable="Посмотреть исходники">
          <div class="h-8 w-8 md:h-6 md:w-6 lg:h-8 lg:w-8 2xl:h-12 2xl:w-12 ml-4 xl:ml-6">
            <NuxtImg format="svg" src="github.svg"></NuxtImg>
          </div>
        </UIButton>
        <div class="mt-4 sm:mt-8 md:mt-10 lg:mt-14 2xl:mt-20">
          <h2 class="font-lora font-normal text-2xl sm:text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl">Стек примененных технологий:</h2>
          <div
            v-for="(item, index) in stack" :key="index"
            class="my-2 lg:my-4 2xl:my-6 bg-transparent font-medium text-sm lg:text-base 2xl:text-2xl uppercase p-4 lg:p-5 2xl:p-7 w-full border border-brand-brown "
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>


    <!-- -----Carousel -->
    <div class="w-full h-96 sm:h-[576px] md:h-[496px] lg:h-[624px] 2xl:h-[936px]">
      <img alt="image" src="../../assets/resume.png" class="size-full object-cover object-center">
    </div>

      <!-- -----Carousel -->
    <div>
      <div class="mx-20 my-20 flex justify-center flex-wrap gap-4">
        <div class="block max-h-max max-w-max">
          <div class="w-[400px] h-[550px]">
            <img class="absolte size-full object-cover object-center" src="../../assets/image.png" alt="" />
          </div>
        </div>
        <div class="block max-h-max max-w-max">
          <div class="w-[400px] h-[550px]">
            <img class="absolte size-full object-cover object-center" src="../../assets/image.png" alt="" />
          </div>
        </div>
        <div class="block max-h-max max-w-max">
          <div class="w-[400px] h-[550px]">
            <img class="absolte size-full object-cover object-center" src="../../assets/image.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const stack = ["TypeScript", "Vue", "Vuetify", "Pinia"];
</script>

<style lang="scss" scoped></style>