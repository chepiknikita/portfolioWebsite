<template>
  <article>
    <HeroSection background="image.png">
      <HeroContent
        title="Мои работы"
        description="Ниже вы найдете подборку моих проектов"
      />
    </HeroSection>
    <section
      class="mx-auto grid justify-center px-4 py-14 sm:py-16 md:grid-cols-3 md:gap-2 md:px-10 md:py-20 lg:gap-4 lg:px-20 lg:py-24 xl:max-w-6xl 2xl:gap-6 2xl:py-32"
    >
      <ProjectCard
        v-for="project in data"
        :key="project.id"
        :to="`/projects/${project.slug}`"
        :title="project.name"
        :image="project.image"
      />
    </section>
  </article>
</template>

<script setup lang="ts">
  import { getProjects } from "~/services/api/projects";

  const { data } = await getProjects();
</script>

<style scoped></style>
