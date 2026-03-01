type ProjectListItem = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

export class ProjectListItemDto {
  id: number;
  name: string;
  slug: string;
  image: string;

  constructor(project: ProjectListItem) {
    this.id = project.id;
    this.name = project.name;
    this.slug = project.slug;
    this.image = project.image;
  }
}
