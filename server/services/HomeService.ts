import { HomeResponseDto } from "../dto/HomeResponseDto";
import { HomeRepository } from "../repositories/HomeRepository";

export class HomeService {
  private repository = new HomeRepository();

  async getAll(): Promise<HomeResponseDto[]> {
    const sections = await this.repository.findAll();
    return sections.map((section) => new HomeResponseDto(section));
  }
}
