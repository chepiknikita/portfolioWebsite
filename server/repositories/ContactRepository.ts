import prisma from "~/prisma/client";

export class ContactsRepository {
  async findAll() {
    return prisma.contact.findMany({
      orderBy: {
        order: "asc",
      },
    });
  }
}
