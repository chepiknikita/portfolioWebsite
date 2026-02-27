<template>
  <article class="w-full">
    <HeroSection background="image.png">
      <HeroContent
        title="Держим связь"
        description="Обращайтесь за проектами или сотрудничеством!"
      />
    </HeroSection>
    <ContactsSection :sections="sections" />
  </article>
</template>

<script setup lang="ts">
  import { useContacts } from "~/composables/hooks/useContacts";

  const { sections, loading, fetchAll } = useContacts();

  await fetchAll();
</script>

<style scoped></style>
