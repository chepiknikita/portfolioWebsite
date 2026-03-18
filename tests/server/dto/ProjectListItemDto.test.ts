import { describe, it, expect } from 'vitest'
import { ProjectListItemDto } from '../../../server/dto/ProjectListItemDto'

const mockProject = {
  id: 1,
  name: 'Portfolio',
  slug: 'portfolio',
  image: '/images/portfolio.jpg',
}

describe('ProjectListItemDto', () => {
  it('maps all fields correctly', () => {
    const dto = new ProjectListItemDto(mockProject)

    expect(dto.id).toBe(1)
    expect(dto.name).toBe('Portfolio')
    expect(dto.slug).toBe('portfolio')
    expect(dto.image).toBe('/images/portfolio.jpg')
  })

  it('does not expose extra fields from the source object', () => {
    const dto = new ProjectListItemDto(mockProject)
    expect((dto as unknown as Record<string, unknown>).description).toBeUndefined()
  })
})
