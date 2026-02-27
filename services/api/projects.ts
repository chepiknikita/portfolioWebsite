import type { ProjectListItemDto } from "~/server/dto/ProjectListItemDto";

export const getProjects = () =>
  useFetch<ProjectListItemDto[]>("/api/projects", {
    key: "projects-list",
    default: () => [],
  });
