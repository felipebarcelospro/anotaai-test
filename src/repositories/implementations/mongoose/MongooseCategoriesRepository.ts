import { ICategoryRepository } from '../../ICategoryRepository'
import { ICategory } from '../../../entities/Category'
import { Category } from './schemas/Category'

export class MongooseCategoriesRepository implements ICategoryRepository {
  async create (category: ICategory): Promise<void> {
    await Category.create(category)
  }
}
