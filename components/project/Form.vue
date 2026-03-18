<template>
  <section class="mx-auto w-full">
    <div class="md:flex md:justify-center">
      <div class="my-8 md:max-w-lg md:py-10 lg:max-w-2xl lg:py-20 2xl:max-w-5xl 2xl:py-32">
        <div class="flex items-center gap-4 mb-4 lg:mb-6 2xl:mb-8">
          <span class="block h-px flex-1 bg-brand-brown/40" />
          <h2 class="font-lora text-2xl font-normal sm:text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl whitespace-nowrap">
            Описание проекта
          </h2>
        </div>
        <p class="text-sm leading-relaxed sm:text-base md:text-xs lg:text-base 2xl:text-2xl">
          {{ form.description }}
        </p>
        <button
          v-if="gitUrl"
          class="group mt-6 lg:mt-8 2xl:mt-12 inline-flex items-center gap-3 border-l-2 border-brand-brown pl-4 py-1 transition-colors duration-300 hover:border-white"
          @click="() => redirect(gitUrl)"
        >
          <IconsGithub class="h-5 w-5 text-white/50 transition-colors duration-300 group-hover:text-white 2xl:h-7 2xl:w-7" />
          <span class="font-manrope text-xs uppercase tracking-widest text-white/50 transition-colors duration-300 group-hover:text-white 2xl:text-base">
            Посмотреть исходники
          </span>
          <span class="text-white/30 transition-colors duration-300 group-hover:text-white text-sm 2xl:text-lg">→</span>
        </button>
        <div class="mt-4 sm:mt-8 md:mt-10 lg:mt-14 2xl:mt-20">
          <div class="flex items-center gap-4 mb-4 lg:mb-6 2xl:mb-8">
            <span class="block h-px flex-1 bg-brand-brown/40" />
            <h2 class="font-lora text-2xl font-normal sm:text-4xl md:text-2xl lg:text-3xl 2xl:text-5xl whitespace-nowrap">
              Стек технологий
            </h2>
          </div>
          <div v-if="form.technologies.length" class="flex flex-wrap gap-2 lg:gap-3 2xl:gap-4">
            <span
              v-for="(item, index) in form.technologies"
              :key="index"
              class="border border-brand-brown px-4 py-2 font-manrope text-xs font-medium uppercase tracking-widest transition-colors duration-300 hover:bg-brand-brown hover:text-white lg:px-5 lg:py-2.5 2xl:px-7 2xl:py-4 2xl:text-base"
            >
              {{ item }}
            </span>
          </div>
          <div v-else class="text-sm text-white/40 font-manrope">
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
  import { ProjectImageType, ProjectLinkType } from "@prisma/client";
  import type { ProjectFormModel, ProjectFormImage, ProjectFormLink } from "~/types/project-form";

  const form = defineModel<ProjectFormModel>({ required: true });

  const mobileImages = computed(() => form.value.images?.filter((i: ProjectFormImage) => i.type === ProjectImageType.MOBILE));
  const desktopImages = computed(() => form.value.images?.filter((i: ProjectFormImage) => i.type === ProjectImageType.DESKTOP));

  const gitUrl = computed(() => form.value.links.find((link: ProjectFormLink) => link.type === ProjectLinkType.GITHUB)?.url ?? '');

  const redirect = (url: string) => {
    navigateTo(url, { external: true });
  };
</script>

