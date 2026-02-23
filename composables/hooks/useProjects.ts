import type { ProjectResponseDto } from "~/server/dto/ProjectResponseDto";

export function useProjects() {
  const projects: Ref<ProjectResponseDto[]> = ref([]);
  const projectBySlug = ref<ProjectResponseDto | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchAll() {
    loading.value = true;
    try {
      const { data } = await useFetch<ProjectResponseDto[]>("/api/projects");
      projects.value = data.value || [];
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  async function fetchBySlug(slug: string) {
    loading.value = true;
    try {
      const { data } = await useFetch<ProjectResponseDto>(
        `/api/projects/${slug}`,
      );
      projectBySlug.value = data.value ?? null;
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

  return {
    projects,
    projectBySlug,
    loading,
    error,
    fetchAll,
    fetchBySlug,
  };
}
