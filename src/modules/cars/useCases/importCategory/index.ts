import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImporteCategoryUseCase } from './ImporteCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImporteCategoryUseCase(categoriesRepository);
export const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);
