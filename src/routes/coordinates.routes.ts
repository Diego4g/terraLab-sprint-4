import { Router } from "express";

import { CreateCoordinatesController } from "../modules/coordinates/useCases/createCoordinates/CreateCoordinatesController";

const coordinatesRoutes = Router({
  mergeParams: true,
});

const createCoordinatesController = new CreateCoordinatesController();

coordinatesRoutes.post("/", createCoordinatesController.handle);

export { coordinatesRoutes };
