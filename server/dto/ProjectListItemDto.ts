export class ProjectListItemDto {
  id: number;
  name: string;
  slug: string;
  image: string;

  constructor(project: any) {
    this.id = project.id;
    this.name = project.name;
    this.slug = project.slug;
    this.image = project.image;
  }
}