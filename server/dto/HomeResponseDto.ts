import type { HomeSection, ImagePosition } from "@prisma/client";

export class HomeResponseDto {
  id: number;
  title: string;
  description: string;
  image: string;
  imagePosition: ImagePosition;

  constructor(section: HomeSection) {
    this.id = section.id;
    this.title = section.title;
    this.description = section.description;
    this.image = section.image;
    this.imagePosition = section.imagePosition;
  }
}
