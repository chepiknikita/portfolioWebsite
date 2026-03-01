import { ContactService } from "~/server/services/ContactService"
import { assertNoRouteParams, withApiErrorHandling } from '~/server/utils/api'

export default defineEventHandler(async (event) => {
  return withApiErrorHandling(async () => {
    assertNoRouteParams(event.context.params)

    const service = new ContactService()
    return service.getAll()
  })
})
