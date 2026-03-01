import type { ContactResponseDto } from "~/server/dto/ContactResponseDto";
import { useApiWithErrorHandling } from "./base";

export const getContacts = () =>
  useApiWithErrorHandling<ContactResponseDto[]>("/api/contacts", {
    key: "contacts-sections",
    defaultValue: () => [],
  });
