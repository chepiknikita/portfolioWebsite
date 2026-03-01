import type { ResumeSectionDto } from "~/server/dto/ResumeSectionDto";
import { useApiWithErrorHandling } from "./base";

export const getResumeSections = () =>
  useApiWithErrorHandling<ResumeSectionDto[]>("/api/resume", {
    key: "resume-sections",
    defaultValue: () => [],
  });
