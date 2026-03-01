import { HomeService } from "~/server/services/HomeService"
import { assertNoRouteParams, withApiErrorHandling } from '~/server/utils/api'

export default defineEventHandler(async (event) => {
  return withApiErrorHandling(async () => {
    assertNoRouteParams(event.context.params)

    const service = new HomeService()
    return service.getAll()
  })
})
