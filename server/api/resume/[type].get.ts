import { ResumeService } from '~/server/services/ResumeService'

export default defineEventHandler(async (event) => {
  const type = event.context.params?.type as string

  const service = new ResumeService()
  return service.getByType(type)
})