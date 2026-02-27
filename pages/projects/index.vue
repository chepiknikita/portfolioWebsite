<template>
  <article>
    <HeroSection background="image.png">
      <HeroContent
        title="Мои работы"
        description="Ниже вы найдете подборку моих проектов"
      />
    </HeroSection>
    <section
      class="flex flex-col items-center justify-center px-4 py-14 sm:py-16 md:flex-row md:flex-wrap md:gap-2 md:px-10 md:py-20 lg:gap-4 lg:px-20 lg:py-24 2xl:gap-6 2xl:py-32"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :to="`/projects/{${project.id}}`"
        :title="project.name"
        :image="project.image"
      />
    </section>
  </article>
</template>

<script setup lang="ts">
  import { useProjects } from "~/composables/hooks/useProjects";

  const { projects, projectBySlug, loading, fetchAll, fetchBySlug } =
    useProjects();

  await fetchAll();
</script>

<style scoped></style>
