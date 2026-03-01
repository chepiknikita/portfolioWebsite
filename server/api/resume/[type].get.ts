import { ResumeService } from '~/server/services/ResumeService'
import { ResumeSectionType } from '@prisma/client'
import { assertEnum, withApiErrorHandling } from '~/server/utils/api'

export default defineEventHandler(async (event) => {
  return withApiErrorHandling(async () => {
    const type = assertEnum(
      event.context.params?.type,
      'type',
      Object.values(ResumeSectionType),
    )

    const service = new ResumeService()
    return service.getByType(type)
  })
})