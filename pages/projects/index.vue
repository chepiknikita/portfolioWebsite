<template>
  <article>
    <HeroSection :background="backgroundImg">
      <HeroContent title="Мои работы" description="Ниже вы найдете подборку моих проектов" />
    </HeroSection>
      <section class="py-14 px-4 sm:py-16 md:py-20 md:px-10 lg:px-20 lg:py-24 2xl:py-32 flex flex-col items-center justify-center md:flex-row md:gap-2 md:flex-wrap lg:gap-4 2xl:gap-6 ">
        <ProjectCard to="/projects/2" title="Read more asdasdsad asdasdasd as dasdas" :image="projectImg"/>
        <!-- <ProjectCard to="/projects/2" title="Read more" :image="projectImg"/>
        <ProjectCard to="/projects/2" title="Read more" :image="projectImg"/>
         <ProjectCard to="/projects/2" title="Read more" :image="projectImg"/>
        <ProjectCard to="/projects/2" title="Read more" :image="projectImg"/> -->
      </section>
  </article>
</template>

<script setup lang="ts">

import { onMounted } from 'vue';
import projectImg from '~/assets/image.png';
import backgroundImg from '~/assets/image.png';
import { useProjects } from '~/composables/hooks/useProjects';

const {
  projects,
  projectBySlug,
  loading,
  fetchAll,
  fetchBySlug,
} = useProjects();

onMounted(async () => {
  await fetchAll();
});

</script>

<style scoped></style>