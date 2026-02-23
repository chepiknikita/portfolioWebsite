import { ResumeService } from '~/server/services/ResumeService'

export default defineEventHandler(async () => {
  const service = new ResumeService()
  return service.getAll()
})