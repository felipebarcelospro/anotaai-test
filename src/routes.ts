import { Router } from 'express'

const router = Router()

router.post('/', (request, response) => {
  return response.send({ ok: true })
})

export { router }
