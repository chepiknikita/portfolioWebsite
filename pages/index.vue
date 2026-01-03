<template>
  <article>
    <section>
      <div class="relative h-[100vh] overflow-hidden py-24 sm:py-32 flex items-center">
        <img
          alt="image"
          src="../assets/image.png"
          class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        >
        <div class="mx-auto px-6 lg:px-8">
          <div class="mx-auto lg:mx-0">
            <p class="the-title-preview text-left">Nikita Chepik</p>
            <p class="the-title-preview ">Fullstack Developer</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <HomeInfo
        :value="{
          title: 'Цель создания собственного сайта',
          description: 'На данном сайте представлена информация о моей профессиональной деятельности и выполненных проектах. Основная цель — продемонстрировать портфолио веб-разработчика.'
        }"
      />
    </section>
    <section>
      <HomeInfo is-img-right
        :value="{
          title: 'Моя страсть - создание веб-приложений',
          description: `В прошлом я работал инженером в области информационно-аналитических систем, однако со временем нашел свое истинное призвание в сфере информационных технологий. Получаю огромное удовольствие от своей работы и стремлюсь к постоянному развитию в этой динамичной области. Уже более 5 лет занимаюсь разработкой приложений для МО.`
        }"
        />
    </section>
    <section>
      <HomeWorks
        :value="{ title: 'Проекты', description: 'Представляю вам несколько проектов, над которыми я работал' }" />
    </section>
  </article>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped></style>