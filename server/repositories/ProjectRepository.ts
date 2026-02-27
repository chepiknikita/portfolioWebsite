import prisma from "~/prisma/client";

export class ProjectRepository {
  async findAll() {
    return prisma.project.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        image: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findAllDetailed() {
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
      where: { slug },
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
