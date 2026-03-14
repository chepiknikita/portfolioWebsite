import type { Contact } from "@prisma/client";

export class ContactResponseDto {
  id: number;
  name: string;
  url: string;
  icon: string;
  order: number;

  constructor(contact: Contact) {
    this.id = contact.id;
    this.name = contact.name;
    this.url = contact.url;
    this.icon = contact.icon;
    this.order = contact.order;
  }
}
