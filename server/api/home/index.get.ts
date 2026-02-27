import { HomeService } from "~/server/services/HomeService"

export default defineEventHandler(async () => {
  const service = new HomeService()
  return service.getAll()
})
