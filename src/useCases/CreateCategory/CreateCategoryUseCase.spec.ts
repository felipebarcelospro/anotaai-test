import app from '../../app'
import request from 'supertest'
import { clearDatabase, closeDatabase } from '@config/mongooseInMemory.config'

afterEach(async () => await clearDatabase())

afterAll(async () => await closeDatabase())

describe('CreateCategoryUseCase', () => {
  it('should create a category', async () => {
    const response = await request(app).post('/categories').send({ title: 'test' })

    expect(response.status).toBe(201)
  })

  it('should validate title', async () => {
    const response = await request(app).post('/categories').send()

    expect(response.status).toBe(400)
  })
})
