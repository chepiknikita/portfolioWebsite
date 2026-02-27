import type { ContactResponseDto } from "~/server/dto/ContactResponseDto";

export const getContacts = () =>
  useFetch<ContactResponseDto[]>("/api/contacts", {
    key: "contacts-sections",
    default: () => [],
  });
