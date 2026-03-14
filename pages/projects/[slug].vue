<template>
  <section class="size-full px-4 py-8 md:px-10 lg:px-20 2xl:px-24">
    <template v-if="project">
      <div class="my-24 text-center md:my-28 lg:my-32">
        <h1 class="font-lora text-4xl font-normal sm:text-6xl lg:text-7xl 2xl:text-8xl">
          {{ project.name }}
        </h1>
      </div>

      <div class="h-96 w-full sm:h-[576px] md:h-[496px] lg:h-[624px] 2xl:h-[936px]">
        <UIImage :src="project.image" :alt="project.name" />
      </div>

      <ProjectForm v-model="form" />
    </template>

    <div v-else-if="error" class="py-20 text-center text-sm uppercase text-red-600">
      Не удалось загрузить проект
    </div>

    <ProjectDetailSkeleton v-else />
  </section>
</template>

<script setup lang="ts">
  import { getProjectBySlug } from "~/services/api/projects";
  import type { ProjectResponseDto } from "~/server/dto/ProjectResponseDto";
  import type { ProjectFormModel } from "~/types/project-form";

  const route = useRoute();
  const slug = computed(() => String(route.params.slug ?? ""));

  const { data: project, error } = getProjectBySlug(slug);

  const form = ref<ProjectFormModel>({
    name: "",
    description: "",
    links: [],
    technologies: [],
    images: [],
  });

  watch(
    project,
    (value: ProjectResponseDto | null) => {
      if (!value) return;

      form.value = {
        name: value.name ?? "",
        description: value.description ?? "",
        links: (value.links ?? []).map((link) => ({
          type: String(link.type ?? ""),
          url: String(link.url ?? ""),
        })),
        technologies: (value.technologies ?? []).map((technology) => String(technology)),
        images: (value.images ?? []).map((image) => ({
          type: String(image.type ?? ""),
          url: String(image.url ?? ""),
        })),
      };
    },
    { immediate: true },
  );
</script>

