import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export class CreateCategoryController {
  constructor (
    private createCategoryUseCase: CreateCategoryUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { title } = request.body

    try {
      await this.createCategoryUseCase.execute({
        title
      })

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
