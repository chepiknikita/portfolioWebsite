import type { ResumeSection } from "@prisma/client";

export class ResumeSectionDto {
  id: number;
  type: string;
  title: string;
  content: string;

  constructor(section: ResumeSection) {
    this.id = section.id;
    this.type = section.type;
    this.title = section.title;
    this.content = section.content;
  }
}
