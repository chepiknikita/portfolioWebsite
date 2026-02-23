<template>
  <article>
    <HeroSection :background="backgroundImg">
      <HeroContent title="Nikita Chepik" description="Fullstack Developer" />
    </HeroSection>
    <ProfileSection />
    <ProjectIntroSection text="Представляю вам несколько проектов, над которыми я работал" />
  </article>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import backgroundImg from '~/assets/image.png';
import { useHome } from '~/composables/hooks/useHome';

const {
  sections,
  loading,
  fetchAll
} = useHome();

onMounted(async () => {
  await fetchAll();
});

</script>

<style lang="scss" scoped></style>