import { createError } from 'h3'
import type { ApiErrorPayload } from '~/types/api'

const DEFAULT_ERROR: ApiErrorPayload = {
  status: 500,
  code: 'INTERNAL_SERVER_ERROR',
  message: 'Internal server error',
}

export function apiError(payload: ApiErrorPayload) {
  return createError({
    statusCode: payload.status,
    statusMessage: payload.message,
    data: payload,
  })
}

export function validationError(details: unknown, message = 'Validation failed') {
  return apiError({
    status: 400,
    code: 'VALIDATION_ERROR',
    message,
    details,
  })
}

export function assertNoRouteParams(params: Record<string, unknown> | undefined) {
  if (!params || Object.keys(params).length === 0) {
    return
  }

  throw validationError({ params }, 'Маршрут без параметров')
}

export function assertNonEmptyString(
  value: unknown,
  field: string,
  options?: {
    pattern?: RegExp
    maxLength?: number
  },
) {
  if (typeof value !== 'string') {
    throw validationError({ [field]: 'Должна быть строка' })
  }

  const normalizedValue = value.trim()

  if (!normalizedValue) {
    throw validationError({ [field]: 'Поле должно быть заполнено' })
  }

  if (options?.maxLength && normalizedValue.length > options.maxLength) {
    throw validationError({ [field]: `Должно быть <= ${options.maxLength} символов` })
  }

  if (options?.pattern && !options.pattern.test(normalizedValue)) {
    throw validationError({ [field]: 'Невалидный формат' })
  }

  return normalizedValue
}

export function assertEnum<TValue extends string>(
  value: unknown,
  field: string,
  allowedValues: readonly TValue[],
) {
  if (typeof value !== 'string' || !allowedValues.includes(value as TValue)) {
    throw validationError({
      [field]: `Должен быть один из: ${allowedValues.join(', ')}`,
    })
  }

  return value as TValue
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function toApiErrorPayload(error: unknown): ApiErrorPayload {
  if (isObject(error)) {
    const data = isObject(error.data) ? error.data : undefined

    if (
      data &&
      typeof data.status === 'number' &&
      typeof data.code === 'string' &&
      typeof data.message === 'string'
    ) {
      return {
        status: data.status,
        code: data.code,
        message: data.message,
        details: data.details,
      }
    }

    if (typeof error.statusCode === 'number' && typeof error.statusMessage === 'string') {
      return {
        status: error.statusCode,
        code: error.statusCode >= 500 ? 'INTERNAL_SERVER_ERROR' : 'REQUEST_ERROR',
        message: error.statusMessage,
      }
    }
  }

  return DEFAULT_ERROR
}

export async function withApiErrorHandling<T>(handler: () => Promise<T>) {
  try {
    return await handler()
  } catch (error) {
    throw apiError(toApiErrorPayload(error))
  }
}
