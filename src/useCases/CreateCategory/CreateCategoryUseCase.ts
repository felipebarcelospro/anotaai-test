import { ICategoryRepository } from '../../repositories/ICategoryRepository'
import { ICreateCategoryRequestDTO } from './CreateCategoryDTO'

export class CreateCategoryUseCase {
  constructor (
    private CategoryRepository: ICategoryRepository
  ) {}

  async execute (data: ICreateCategoryRequestDTO) {
    if (!data.title) {
      throw new Error('Title is Required')
    }

    await this.CategoryRepository.create(data)
  }
}
