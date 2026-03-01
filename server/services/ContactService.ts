import { ContactResponseDto } from "../dto/ContactResponseDto";
import { ContactRepository } from "../repositories/ContactRepository";

export class ContactService {
  private repository = new ContactRepository();

  async getAll(): Promise<ContactResponseDto[]> {
    const contacts = await this.repository.findAll();
    return contacts.map((contact) => new ContactResponseDto(contact));
  }
}