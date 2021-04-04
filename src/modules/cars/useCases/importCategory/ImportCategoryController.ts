import { Request, Response } from "express";

import { ImporteCategoryUseCase } from "./ImporteCategoryUseCase";

export class ImportCategoryController {
  constructor(private importCategoryUseCasa: ImporteCategoryUseCase) { }

  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryUseCasa.execute(file);

    return response.send();
  }
}
