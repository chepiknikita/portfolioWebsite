import { ProjectRepository } from "../repositories/ProjectRepository";
import { ProjectResponseDto } from "../dto/ProjectResponseDto";
import { ProjectListItemDto } from "../dto/ProjectListItemDto";
import { createError } from "h3";

export class ProjectService {
  private repository = new ProjectRepository();

  async getAll(): Promise<ProjectListItemDto[]> {
    const projects = await this.repository.findAll();
    return projects.map((project) => new ProjectListItemDto(project));
  }

  async getBySlug(slug: string): Promise<ProjectResponseDto> {
    const project = await this.repository.findBySlug(slug);

    if (!project) {
      throw createError({
        statusCode: 404,
        statusMessage: "Проект не найден",
      });
    }

    return new ProjectResponseDto(project);
  }
}
