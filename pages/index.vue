<template>
  <article>
    <HeroSection background="image.png">
      <HeroContent
        title="Nikita Chepik"
        description="Fullstack Developer"
      />
    </HeroSection>
    <ProfileSection :data="data" />
    <ProjectIntroSection
      text="Представляю вам несколько проектов, над которыми я работал"
    />
  </article>
</template>

<script setup lang="ts">
  import { getHomeSections } from "~/services/api/home";

  const { data } = await getHomeSections();
</script>

<style lang="scss" scoped></style>
