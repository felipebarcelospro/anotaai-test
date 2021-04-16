import { Document, Schema, Model, model } from 'mongoose'
import { ICategory } from '../../../../entities/Category'

export interface CategoryModel extends ICategory, Document {}

const CategorySchema = new Schema({
  title: String
}, {
  timestamps: true
})

export const Category: Model<CategoryModel> = model<CategoryModel>('Category', CategorySchema)
