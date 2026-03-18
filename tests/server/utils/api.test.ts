import { describe, it, expect, vi } from 'vitest'

vi.mock('h3', () => ({
  createError: ({ statusCode, statusMessage, data }: {
    statusCode: number
    statusMessage: string
    data: unknown
  }) => {
    const err = Object.assign(new Error(statusMessage), { statusCode, statusMessage, data })
    return err
  },
}))

import {
  assertNonEmptyString,
  assertEnum,
  assertNoRouteParams,
  withApiErrorHandling,
} from '../../../server/utils/api'

// ─── assertNonEmptyString ────────────────────────────────────────────────────

describe('assertNonEmptyString', () => {
  it('throws when value is not a string', () => {
    expect(() => assertNonEmptyString(42, 'field')).toThrow()
  })

  it('throws when value is an empty string', () => {
    expect(() => assertNonEmptyString('', 'field')).toThrow()
  })

  it('throws when value is whitespace only', () => {
    expect(() => assertNonEmptyString('   ', 'field')).toThrow()
  })

  it('throws when value exceeds maxLength', () => {
    expect(() => assertNonEmptyString('hello', 'field', { maxLength: 3 })).toThrow()
  })

  it('throws when value does not match pattern', () => {
    expect(() =>
      assertNonEmptyString('abc123', 'field', { pattern: /^[a-z]+$/ }),
    ).toThrow()
  })

  it('returns trimmed value for a valid string', () => {
    const result = assertNonEmptyString('  hello  ', 'field')
    expect(result).toBe('hello')
  })

  it('accepts value at exactly maxLength', () => {
    const result = assertNonEmptyString('abc', 'field', { maxLength: 3 })
    expect(result).toBe('abc')
  })

  it('accepts value matching the pattern', () => {
    const result = assertNonEmptyString('abc', 'field', { pattern: /^[a-z]+$/ })
    expect(result).toBe('abc')
  })
})

// ─── assertEnum ─────────────────────────────────────────────────────────────

describe('assertEnum', () => {
  const allowed = ['GITHUB', 'DEMO', 'FIGMA'] as const

  it('returns the value when it is in the allowed list', () => {
    expect(assertEnum('GITHUB', 'type', allowed)).toBe('GITHUB')
  })

  it('throws when value is not in the allowed list', () => {
    expect(() => assertEnum('UNKNOWN', 'type', allowed)).toThrow()
  })

  it('throws when value is not a string', () => {
    expect(() => assertEnum(null, 'type', allowed)).toThrow()
  })
})

// ─── assertNoRouteParams ─────────────────────────────────────────────────────

describe('assertNoRouteParams', () => {
  it('passes silently when params is undefined', () => {
    expect(() => assertNoRouteParams(undefined)).not.toThrow()
  })

  it('passes silently when params is an empty object', () => {
    expect(() => assertNoRouteParams({})).not.toThrow()
  })

  it('throws when params contains keys', () => {
    expect(() => assertNoRouteParams({ slug: 'test' })).toThrow()
  })
})

// ─── withApiErrorHandling ────────────────────────────────────────────────────

describe('withApiErrorHandling', () => {
  it('returns the resolved value on success', async () => {
    const result = await withApiErrorHandling(async () => 'ok')
    expect(result).toBe('ok')
  })

  it('re-throws with api error format when handler throws a structured error', async () => {
    const structuredError = {
      data: { status: 400, code: 'VALIDATION_ERROR', message: 'Bad request' },
    }

    await expect(
      withApiErrorHandling(async () => {
        throw structuredError
      }),
    ).rejects.toMatchObject({
      statusCode: 400,
      data: { status: 400, code: 'VALIDATION_ERROR', message: 'Bad request' },
    })
  })

  it('falls back to 500 INTERNAL_SERVER_ERROR for unknown errors', async () => {
    await expect(
      withApiErrorHandling(async () => {
        throw new Error('boom')
      }),
    ).rejects.toMatchObject({
      statusCode: 500,
      data: { status: 500, code: 'INTERNAL_SERVER_ERROR' },
    })
  })
})
