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
import backgroundImg from '~/assets/image.png';

</script>

<style lang="scss" scoped></style>