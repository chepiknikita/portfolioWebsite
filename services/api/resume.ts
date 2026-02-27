import type { ResumeSectionDto } from "~/server/dto/ResumeSectionDto";

export const getResumeSections = () =>
  useFetch<ResumeSectionDto[]>("/api/resume", {
    key: "resume-sections",
    default: () => [],
  });
