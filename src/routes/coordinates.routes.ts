import { Router } from "express";

import { CreateCoordinatesController } from "../modules/coordinates/useCases/createCoordinates/CreateCoordinatesController";
import { DeleteCoordinatesController } from "../modules/coordinates/useCases/deleteCoordinates/DeleteCoordinatesController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const coordinatesRoutes = Router({
  mergeParams: true,
});

const createCoordinatesController = new CreateCoordinatesController();
const deleteCoordinatesController = new DeleteCoordinatesController();

coordinatesRoutes.post(
  "/",
  ensureAuthenticated,
  createCoordinatesController.handle
);

coordinatesRoutes.delete(
  "/:id",
  ensureAuthenticated,
  deleteCoordinatesController.handle
);

export { coordinatesRoutes };
