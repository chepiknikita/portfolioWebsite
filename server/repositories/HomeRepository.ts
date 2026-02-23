import prisma from "~/prisma/client";

export class HomeRepository {
  async findAll() {
    return prisma.homeSection.findMany({
      orderBy: {
        order: "asc",
      },
    });
  }
}
