import { Router } from 'express'
import { createCategoryController } from './useCases/CreateCategory'

const router = Router()

router.get('/', (request, response) => {
  return response.send({ ok: true })
})

router.post('/categories', (request, response) => {
  return createCategoryController.handle(request, response)
})

export { router }
