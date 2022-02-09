import { Router } from "express";

import { CreateCoordinatesController } from "../modules/coordinates/useCases/createCoordinates/CreateCoordinatesController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const coordinatesRoutes = Router({
  mergeParams: true,
});

const createCoordinatesController = new CreateCoordinatesController();

coordinatesRoutes.post(
  "/",
  ensureAuthenticated,
  createCoordinatesController.handle
);

export { coordinatesRoutes };
