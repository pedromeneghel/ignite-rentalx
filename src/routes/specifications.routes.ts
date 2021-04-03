import { Router } from "express";

import { listCategoriesController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { specificationsRoutes };
