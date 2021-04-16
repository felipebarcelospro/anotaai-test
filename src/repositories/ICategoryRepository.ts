import { ICategory } from 'src/entities/Category'

export interface ICategoryRepository {
  create(category: ICategory): Promise<void>;
}
