import { ProjectService } from '~/server/services/ProjectService'

export default defineEventHandler(async (event) => {
  const slug = event.context.params?.slug as string
  const service = new ProjectService()
  return service.getBySlug(slug)
})