import type { Contact } from "@prisma/client";

export class ContactResponseDto {
  id: number;
  name: string;
  url: string;
  icon: string;

  constructor(section: Contact) {
    this.id = section.id;
    this.name = section.name;
    this.url = section.url;
    this.icon = section.icon;
  }
}
