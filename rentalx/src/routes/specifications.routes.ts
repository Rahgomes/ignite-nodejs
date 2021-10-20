import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCase/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
