<template>
  <article class="w-full">
    <HeroSection background="resume.png">
      <HeroContent
        title="Nikita Chepik"
        description="Мой код — это инструмент для роста бизнеса!"
      />
    </HeroSection>
    <ResumeWhyWebDevSection
      v-scroll-animate
      title="Почему я выбрал веб-разработку"
      :reason="reasons"
    />
    <ResumeTechnologyStackSection
      v-scroll-animate="{ delay: 100 }"
      title="Стек технологий"
      description="Использую современные инструменты для создания отзывчивых и производительных интерфейсов. Ориентирован на качество кода и итоговый пользовательский опыт."
    />
    <ResumeSkillsSection
      v-scroll-animate="{ delay: 150 }"
      title="Навыки"
      :softs="softSkills"
      :hards="hardSkills"
    />
  </article>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { ResumeSectionType } from "@prisma/client";
  import { getResumeSections } from "~/services/api/resume";

  const { data } = await getResumeSections();

  const softSkills = computed(() =>
    (data.value ?? []).filter((item) => item.type === ResumeSectionType.SOFT),
  );
  const hardSkills = computed(() =>
    (data.value ?? []).filter((item) => item.type === ResumeSectionType.HARD),
  );
  const reasons = computed(() =>
    (data.value ?? []).filter((item) => item.type === ResumeSectionType.REASON),
  );
</script>
