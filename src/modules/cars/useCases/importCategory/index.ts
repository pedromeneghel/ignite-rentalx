import { ImportCategoryController } from "./ImportCategoryController";
import { ImporteCategoryUseCase } from "./ImporteCategoryUseCase";

const importCategoryUseCase = new ImporteCategoryUseCase();
export const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);
