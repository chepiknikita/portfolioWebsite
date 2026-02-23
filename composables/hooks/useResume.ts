import { ref } from "vue";
import { ResumeSectionType } from "@prisma/client";
import type { ResumeSectionDto } from "~/server/dto/ResumeSectionDto";

export function useResume() {
  const softSkills = ref<ResumeSectionDto[]>([]);
  const hardSkills = ref<ResumeSectionDto[]>([]);
  const reasons = ref<ResumeSectionDto[]>([]);

  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchByType = async (type: ResumeSectionType) => {
    loading.value = true;
    try {
      const { data } = await useFetch<ResumeSectionDto[]>(`/api/resume/${type}`);
      const items = data.value || [];

      switch (type) {
        case ResumeSectionType.SOFT:
          softSkills.value = items;
          break;
        case ResumeSectionType.HARD:
          hardSkills.value = items;
          break;
        case ResumeSectionType.REASON:
          reasons.value = items;
          break;
      }
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const fetchAll = async () => {
    await Promise.all([
      fetchByType(ResumeSectionType.SOFT),
      fetchByType(ResumeSectionType.HARD),
      fetchByType(ResumeSectionType.REASON),
    ]);
  };

  return {
    softSkills,
    hardSkills,
    reasons,
    loading,
    error,
    fetchByType,
    fetchAll,
  };
}
