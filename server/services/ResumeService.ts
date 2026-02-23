import { ResumeRepository } from "../repositories/ResumeRepository";
import { ResumeSectionDto } from "../dto/ResumeSectionDto";
import { ResumeSectionType } from "@prisma/client";

export class ResumeService {
  private repository = new ResumeRepository();

  async getAll() {
    const sections = await this.repository.findAll();
    return sections.map((s) => new ResumeSectionDto(s));
  }

  async getByType(type: string) {
    if (!Object.values(ResumeSectionType).includes(type as ResumeSectionType)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid resume section type",
      });
    }

    const sections = await this.repository.findByType(
      type as ResumeSectionType,
    );

    return sections.map((s) => new ResumeSectionDto(s));
  }

  async create(data: {
    type: ResumeSectionType;
    title: string;
    content: string;
    order: number;
  }) {
    const section = await this.repository.create(data);
    return new ResumeSectionDto(section);
  }
}
