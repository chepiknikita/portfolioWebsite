import { ContactResponseDto } from "../dto/ContactResponseDto";
import { ContactsRepository } from "../repositories/ContactRepository";

export class ContactService {
  private repository = new ContactsRepository();

  async getAll() {
    const contacts = await this.repository.findAll();
    return contacts.map((c) => new ContactResponseDto(c));
  }
}