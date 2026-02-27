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
  import { getContacts } from "~/services/api/contacts";

  const { data: sections } = await getContacts();
</script>

<style scoped></style>
