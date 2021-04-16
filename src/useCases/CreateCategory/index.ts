import { MongooseCategoriesRepository } from '../../repositories/implementations/mongoose/MongooseCategoriesRepository'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'
import { CreateCategoryController } from './CreateCategoryController'

const mongooseCategorysRepository = new MongooseCategoriesRepository()

const createCategoryUseCase = new CreateCategoryUseCase(
  mongooseCategorysRepository
)

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
)

export { createCategoryUseCase, createCategoryController }
