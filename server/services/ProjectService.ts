import { ProjectRepository } from "../repositories/ProjectRepository";
import { ProjectResponseDto } from "../dto/ProjectResponseDto";
import { ProjectListItemDto } from "../dto/ProjectListItemDto";

export class ProjectService {
  private repository = new ProjectRepository();

  async getAll() {
    const projects = await this.repository.findAll();
    return projects.map((p: any) => new ProjectListItemDto(p));
  }

  async getBySlug(slug: string) {
    const project = await this.repository.findBySlug(slug);

    if (!project) {
      throw createError({
        statusCode: 404,
        statusMessage: "Project not found",
      });
    }

    return new ProjectResponseDto(project);
  }
}
