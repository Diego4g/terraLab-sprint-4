import { Router } from "express";

import { CreateCoordinatesController } from "../modules/coordinates/useCases/createCoordinates/CreateCoordinatesController";
import { DeleteCoordinatesController } from "../modules/coordinates/useCases/deleteCoordinates/DeleteCoordinatesController";
import { ListCoordinatesByUserController } from "../modules/coordinates/useCases/listCoordinatesByUser/ListCoordinatesByUserController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const coordinatesRoutes = Router({
  mergeParams: true,
});

const createCoordinatesController = new CreateCoordinatesController();
const deleteCoordinatesController = new DeleteCoordinatesController();
const listCoordinatesByUserController = new ListCoordinatesByUserController();

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

coordinatesRoutes.get(
  "/",
  ensureAuthenticated,
  listCoordinatesByUserController.handle
);

export { coordinatesRoutes };
