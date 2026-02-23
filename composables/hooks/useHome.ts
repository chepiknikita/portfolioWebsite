import type { HomeResponseDto } from "~/server/dto/HomeResponseDto";

export function useHome() {
  const sections = ref<HomeResponseDto[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchAll() {
    loading.value = true;
    try {
      const { data } = await useFetch<HomeResponseDto[]>("/api/home");
      sections.value = data.value || [];
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }

    return {
    sections,
    loading,
    error,
    fetchAll,
  };
}
