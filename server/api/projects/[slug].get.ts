import { ProjectService } from '~/server/services/ProjectService'
import { assertNonEmptyString, withApiErrorHandling } from '~/server/utils/api'

export default defineEventHandler(async (event) => {
  return withApiErrorHandling(async () => {
    const slug = assertNonEmptyString(event.context.params?.slug, 'slug', {
      maxLength: 120,
      pattern: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    })

    const service = new ProjectService()
    return service.getBySlug(slug)
  })
})