import { HomeResponseDto } from "../dto/HomeResponseDto";
import { HomeRepository } from "../repositories/HomeRepository";

export class HomeService {
  private repository = new HomeRepository();

  async getAll() {
    const home = await this.repository.findAll();
    return home.map((v: any) => new HomeResponseDto(v));
  }
}