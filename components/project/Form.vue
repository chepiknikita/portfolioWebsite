<template>
  <section class="mx-auto w-full">
    <div class="md:flex md:justify-center">
      <div class="my-8 md:max-w-lg md:py-10 lg:max-w-2xl lg:py-20 2xl:max-w-5xl 2xl:py-32">
        <h2 class="font-lora text-2xl font-normal sm:text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl">Описание проекта:</h2>
        <div class="my-4 text-sm sm:text-base md:text-xs lg:text-base 2xl:text-2xl">
          {{ form.description }}
        </div>
        <UIButton 
          v-if="gitUrl"
          label="Посмотреть исходники"
          @on-click="() => redirect(gitUrl)"
        >
          <IconsGithub class="ml-4 h-8 w-8 md:h-6 md:w-6 lg:h-8 lg:w-8 xl:ml-6 2xl:h-12 2xl:w-12"/>
        </UIButton>
        <div class="mt-4 sm:mt-8 md:mt-10 lg:mt-14 2xl:mt-20">
          <h2 class="font-lora text-2xl font-normal sm:text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl">
            Стек примененных технологий:
          </h2>
          <div v-if="form.technologies.length">
            <div
              v-for="(item, index) in form.technologies"
              :key="index"
              class="my-2 w-full border border-brand-brown bg-transparent p-4 text-sm font-medium uppercase lg:my-4 lg:p-5 lg:text-base 2xl:my-6 2xl:p-7 2xl:text-2xl"
            >
              {{ item }}
            </div>
          </div>
          <div v-else class="text-sm text-gray-500 my-2">
            Данных нет
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="desktopImages.length"
      class="h-96 w-full sm:h-[576px] md:h-[496px] lg:h-[624px] 2xl:h-[936px]"
    >
      <ProjectCarouselDesktopImages :images="desktopImages"/>
    </div>

    <div
      v-if="mobileImages.length"
      class="my-20 h-96 w-full sm:h-[576px] md:h-[496px] lg:h-[624px] 2xl:h-[936px]"
    >
      <ProjectCarouselDesktopImages :images="mobileImages"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import {computed} from "vue";
  import type { ProjectFormModel } from "../../types/project-form";

  const form = defineModel<ProjectFormModel>({ required: true });

  const mobileImages = computed(() => form.value.images?.filter((i) => i.type === 'MOBILE'));
  const desktopImages = computed(() => form.value.images?.filter((i) => i.type === 'DESKTOP'));

  const gitUrl = computed(() => form.value.links.find((link) => link.type === 'GITHUB')?.url ?? '');

  const redirect = (url: string) => {
    window.location.href = url;
  }
</script>

