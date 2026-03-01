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

}
