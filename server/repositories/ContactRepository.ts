import prisma from "~/prisma/client";

export class ContactRepository {
  async findAll() {
    return prisma.contact.findMany({
      orderBy: {
        order: "asc",
      },
    });
  }
}
