<template>
  <article class="w-full">
    <HeroSection :background="backgroundImg">
      <HeroContent title="Держим связь" description="Обращайтесь за проектами или сотрудничеством!" />
    </HeroSection>
    <ContactsSection />
  </article>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useContacts } from '~/composables/hooks/useContacts';
import backgroundImg from '/assets/image.png';

const {
  sections,
  loading,
  fetchAll
} = useContacts();

onMounted(async () => {
  await fetchAll();
});

</script>

<style scoped></style>