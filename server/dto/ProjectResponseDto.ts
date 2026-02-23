export class ProjectResponseDto {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  links: any[];
  images: any[];
  technologies: string[];

  constructor(project: any) {
    this.id = project.id;
    this.name = project.name;
    this.slug = project.slug;
    this.description = project.description;
    this.image = project.image;
    this.links = project.links;
    this.images = project.images;
    this.technologies = project.technologies.map((t: any) => t.technology.name);
  }
}
