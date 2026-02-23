import { ProjectService } from '~/server/services/ProjectService'

export default defineEventHandler(async () => {
  const service = new ProjectService()
  return service.getAll()
})