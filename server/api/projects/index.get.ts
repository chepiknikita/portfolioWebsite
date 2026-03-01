import { ProjectService } from '~/server/services/ProjectService'
import { assertNoRouteParams, withApiErrorHandling } from '~/server/utils/api'

export default defineEventHandler(async (event) => {
  return withApiErrorHandling(async () => {
    assertNoRouteParams(event.context.params)

    const service = new ProjectService()
    return service.getAll()
  })
})