import { describe, it, expect } from 'vitest'
import { ProjectResponseDto } from '../../../server/dto/ProjectResponseDto'

const mockProject = {
  id: 2,
  name: 'Shop',
  slug: 'shop',
  description: 'An online store',
  image: '/images/shop.jpg',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-06-01'),
  links: [
    { id: 10, type: 'GITHUB' as const, url: 'https://github.com/shop', projectId: 2 },
  ],
  images: [
    { id: 20, type: 'DESKTOP' as const, url: '/images/shop-desktop.jpg', projectId: 2 },
  ],
  technologies: [
    { projectId: 2, technologyId: 1, technology: { id: 1, name: 'Vue', slug: 'vue' } },
    { projectId: 2, technologyId: 2, technology: { id: 2, name: 'TypeScript', slug: 'typescript' } },
  ],
}

describe('ProjectResponseDto', () => {
  it('maps all scalar fields correctly', () => {
    const dto = new ProjectResponseDto(mockProject)

    expect(dto.id).toBe(2)
    expect(dto.name).toBe('Shop')
    expect(dto.slug).toBe('shop')
    expect(dto.description).toBe('An online store')
    expect(dto.image).toBe('/images/shop.jpg')
  })

  it('flattens technologies to an array of names', () => {
    const dto = new ProjectResponseDto(mockProject)
    expect(dto.technologies).toEqual(['Vue', 'TypeScript'])
  })

  it('passes links and images through as-is', () => {
    const dto = new ProjectResponseDto(mockProject)

    expect(dto.links).toBe(mockProject.links)
    expect(dto.images).toBe(mockProject.images)
  })
})
