import type { HomeResponseDto } from "~/server/dto/HomeResponseDto";
import { useApiWithErrorHandling } from "./base";

export const getHomeSections = () =>
  useApiWithErrorHandling<HomeResponseDto[]>("/api/home", {
    key: "home-sections",
    defaultValue: () => [],
  });
