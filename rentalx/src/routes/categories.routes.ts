import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCase/createCategory";
import { importCategoryController } from "../modules/cars/useCase/importCategory";
import { listCategoriesController } from "../modules/cars/useCase/listCategories";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

categoriesRoutes.post("/", (request, response) => {
    console.log("reload ok");
    return createCategoryController().handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
