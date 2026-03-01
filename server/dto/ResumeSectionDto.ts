import type { ResumeSection, ResumeSectionType } from "@prisma/client";

export class ResumeSectionDto {
  id: number;
  type: ResumeSectionType;
  title: string;
  content: string;

  constructor(section: ResumeSection) {
    this.id = section.id;
    this.type = section.type;
    this.title = section.title;
    this.content = section.content;
  }
}
