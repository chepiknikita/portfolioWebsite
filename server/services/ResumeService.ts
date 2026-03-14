import { ResumeRepository } from "../repositories/ResumeRepository";
import { ResumeSectionDto } from "../dto/ResumeSectionDto";
import { ResumeSectionType } from "@prisma/client";

export class ResumeService {
  private repository = new ResumeRepository();

  async getAll(): Promise<ResumeSectionDto[]> {
    const sections = await this.repository.findAll();
    return sections.map((section) => new ResumeSectionDto(section));
  }

  async getByType(type: ResumeSectionType): Promise<ResumeSectionDto[]> {
    const sections = await this.repository.findByType(type);
    return sections.map((section) => new ResumeSectionDto(section));
  }

}
