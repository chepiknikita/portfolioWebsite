<template>
  <article>
    <HeroSection background="image.png">
      <HeroContent
        title="Nikita Chepik"
        description="Fullstack Developer"
      />
    </HeroSection>
    <ProfileSection :sections="sections" />
    <ProjectIntroSection
      text="Представляю вам несколько проектов, над которыми я работал"
    />
  </article>
</template>

<script setup lang="ts">
  import { useHome } from "~/composables/hooks/useHome";

  const { sections, loading, fetchAll } = useHome();

  await fetchAll();
</script>

<style lang="scss" scoped></style>
