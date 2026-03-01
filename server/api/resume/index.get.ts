import { ResumeService } from '~/server/services/ResumeService'
import { assertNoRouteParams, withApiErrorHandling } from '~/server/utils/api'

export default defineEventHandler(async (event) => {
  return withApiErrorHandling(async () => {
    assertNoRouteParams(event.context.params)

    const service = new ResumeService()
    return service.getAll()
  })
})