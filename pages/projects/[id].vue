<template>
  <section class="size-full px-4 py-8 md:px-10 lg:px-20 2xl:px-24">
    <div class="my-24 text-center md:my-28 lg:my-32">
      <h1
        class="font-lora text-4xl font-normal sm:text-7xl lg:text-8xl 2xl:text-9xl"
      >
        Биржа
      </h1>
    </div>

    <div
      class="h-96 w-full sm:h-[576px] md:h-[496px] lg:h-[624px] 2xl:h-[936px]"
    >
      <NuxtImg
        src="resume.png"
        alt="image"
        class="size-full object-cover object-center"
        width="1200"
        height="900"
        format="webp"
        loading="lazy"
      />
    </div>

    <div class="md:flex md:justify-center">
      <div
        class="my-8 md:max-w-lg md:py-10 lg:max-w-2xl lg:py-20 2xl:max-w-5xl 2xl:py-32"
      >
        <h2
          class="font-lora text-2xl font-normal sm:text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl"
        >
          Описание проекта:
        </h2>
        <p
          class="my-4 text-sm sm:text-base md:text-xs lg:text-base 2xl:text-2xl"
        >
          Инвестиционная биржа — это онлайн-платформа, объединяющая инвесторов
          и авторов проектов (стартапы, малый бизнес) для безопасного
          и прозрачного привлечения финансирования. На сайте реализованы личные
          кабинеты, каталог проектов с фильтрами, система безопасных сделок
          через эскроу, встроенный документооборот, аналитика и рейтинги,
          а также инструменты для коммуникации. Платформа обеспечивает
          автоматизацию процессов, снижает риски за счёт экспертизы и проверки
          проектов, предоставляя пользователям удобный доступ к инвестиционным
          возможностям.
        </p>
        <UIButton lable="Посмотреть исходники">
          <div
            class="ml-4 h-8 w-8 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:ml-6 2xl:h-12 2xl:w-12"
          >
            <IconsGithub />
          </div>
        </UIButton>
        <div class="mt-4 sm:mt-8 md:mt-10 lg:mt-14 2xl:mt-20">
          <h2
            class="font-lora text-2xl font-normal sm:text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl"
          >
            Стек примененных технологий:
          </h2>
          <div
            v-for="(item, index) in stack"
            :key="index"
            class="my-2 w-full border border-brand-brown bg-transparent p-4 text-sm font-medium uppercase lg:my-4 lg:p-5 lg:text-base 2xl:my-6 2xl:p-7 2xl:text-2xl"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>

    <!-- -----Carousel -->
    <div
      class="h-96 w-full sm:h-[576px] md:h-[496px] lg:h-[624px] 2xl:h-[936px]"
    >
      <img
        alt="image"
        src="../../assets/resume.png"
        class="size-full object-cover object-center"
      />
    </div>

    <!-- -----Carousel -->
    <div>
      <div class="mx-20 my-20 flex flex-wrap justify-center gap-4">
        <div class="block max-h-max max-w-max">
          <div class="h-[550px] w-[400px]">
            <img
              class="absolte size-full object-cover object-center"
              src="../../assets/image.png"
              alt=""
            />
          </div>
        </div>
        <div class="block max-h-max max-w-max">
          <div class="h-[550px] w-[400px]">
            <img
              class="absolte size-full object-cover object-center"
              src="../../assets/image.png"
              alt=""
            />
          </div>
        </div>
        <div class="block max-h-max max-w-max">
          <div class="h-[550px] w-[400px]">
            <img
              class="absolte size-full object-cover object-center"
              src="../../assets/image.png"
              alt=""
            />
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
