import type { HomeResponseDto } from "~/server/dto/HomeResponseDto";

export const getHomeSections = () =>
  useFetch<HomeResponseDto[]>("/api/home", {
    key: "home-sections",
    default: () => [],
  });
