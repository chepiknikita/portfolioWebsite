import { ResumeSectionType } from "@prisma/client";
import prisma from "~/prisma/client";

export class ResumeRepository {
  async findAll() {
    return prisma.resumeSection.findMany({
      orderBy: {
        order: "asc",
      },
    });
  }

  async findByType(type: ResumeSectionType) {
    return prisma.resumeSection.findMany({
      where: { type },
      orderBy: { order: "asc" },
    });
  }

  async create(data: {
    type: ResumeSectionType;
    title: string;
    content: string;
    order: number;
  }) {
    return prisma.resumeSection.create({ data });
  }

  async update(
    id: number,
    data: Partial<{
      title: string;
      content: string;
      order: number;
    }>,
  ) {
    return prisma.resumeSection.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return prisma.resumeSection.delete({
      where: { id },
    });
  }
}
