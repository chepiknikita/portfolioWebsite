import prisma from "~/prisma/client";

export class ProjectRepository {
  async findAll() {
    return prisma.project.findMany({
      include: {
        links: true,
        images: true,
        technologies: {
          include: {
            technology: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findBySlug(slug: string) {
    return prisma.project.findFirst({
      include: {
        links: true,
        images: true,
        technologies: {
          include: {
            technology: true,
          },
        },
      },
    });
  }
}
