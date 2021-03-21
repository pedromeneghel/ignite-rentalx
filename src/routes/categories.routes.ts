import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ description, name });

  return response.status(201).end();
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.list();

  return response.status(200).json(categories);
});

export { categoriesRoutes };
