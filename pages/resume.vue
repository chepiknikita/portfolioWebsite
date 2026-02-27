<template>
  <article class="w-full">
    <HeroSection background="resume.png">
      <HeroContent
        title="Nikita Chepik"
        description="Мой код — это инструмент для роста бизнеса!"
      />
    </HeroSection>
    <ResumeWhyWebDevSection
      title="Почему я выбрал веб-разработку"
      :reason="reasons"
    />
    <ResumeTechnologyStackSection
      title="Стек технологий"
      description="Использую современные инструменты для создания отзывчивых и производительных интерфейсов. Ориентирован на качество кода и итоговый пользовательский опыт."
    />
    <ResumeSkillsSection
      title="Навыки"
      :softs="softSkills"
      :hards="hardSkills"
    />
  </article>
</template>

<script setup lang="ts">
  import { useResume } from "~/composables/hooks/useResume";

  const { softSkills, hardSkills, reasons, loading, fetchAll } = useResume();

  await fetchAll();
</script>

<style scoped></style>
