import { ContactService } from "~/server/services/ContactService"

export default defineEventHandler(async () => {
  const service = new ContactService()
  return service.getAll()
})
