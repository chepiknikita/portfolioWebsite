import type { Project, ProjectLink, ProjectImage, ProjectTechnology, Technology } from "@prisma/client";

type ProjectWithRelations = Project & {
  links: ProjectLink[];
  images: ProjectImage[];
  technologies: (ProjectTechnology & { technology: Technology })[];
};

export class ProjectResponseDto {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  links: ProjectLink[];
  images: ProjectImage[];
  technologies: string[];

  constructor(project: ProjectWithRelations) {
    this.id = project.id;
    this.name = project.name;
    this.slug = project.slug;
    this.description = project.description;
    this.image = project.image;
    this.links = project.links;
    this.images = project.images;
    this.technologies = project.technologies.map((t) => t.technology.name);
  }
}
