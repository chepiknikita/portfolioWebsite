import type { ContactResponseDto } from "~/server/dto/ContactResponseDto";

export function useContacts() {
  const sections = ref<ContactResponseDto[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchAll() {
    loading.value = true;
    try {
      const { data } = await useFetch<ContactResponseDto[]>("/api/contacts");
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
