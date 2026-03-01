import type { MaybeRefOrGetter } from "vue";
import { toValue } from "vue";
import type { ProjectListItemDto } from "~/server/dto/ProjectListItemDto";
import type { ProjectResponseDto } from "~/server/dto/ProjectResponseDto";
import { useApiWithErrorHandling } from "./base";

export const getProjects = () =>
  useApiWithErrorHandling<ProjectListItemDto[]>("/api/projects", {
    key: "projects-list",
    defaultValue: () => [],
  });

export const getProjectBySlug = (slug: MaybeRefOrGetter<string>) =>
  useApiWithErrorHandling<ProjectResponseDto>(
    () => `/api/projects/${toValue(slug)}`,
    {
      key: `project-${toValue(slug)}`,
    },
  );
