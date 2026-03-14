<template>
  <article class="w-full">
    <HeroSection background="image.png">
      <HeroContent
        title="Держим связь"
        description="Обращайтесь за проектами или сотрудничеством!"
      />
    </HeroSection>
    <ContactsSection :data="sortedData" />
  </article>
</template>

<script setup lang="ts">
  import { getContacts } from "~/services/api/contacts";

  const { data } = await getContacts();

  const sortedData = computed(() =>
    (data.value ?? []).slice().sort((a, b) => a.order - b.order),
  );
</script>

