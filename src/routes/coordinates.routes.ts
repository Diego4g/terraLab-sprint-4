import { Router } from "express";

import { CreateCoordinatesController } from "../modules/coordinates/useCases/createCoordinates/CreateCoordinatesController";
import { DeleteCoordinatesController } from "../modules/coordinates/useCases/deleteCoordinates/DeleteCoordinatesController";
import { ListCoordinatesByUserController } from "../modules/coordinates/useCases/listCoordinatesByUser/ListCoordinatesByUserController";
import { UpdateCoordinatesController } from "../modules/coordinates/useCases/updateCoordinates/UpdateCoordinatesController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const coordinatesRoutes = Router({
  mergeParams: true,
});

const createCoordinatesController = new CreateCoordinatesController();
const deleteCoordinatesController = new DeleteCoordinatesController();
const listCoordinatesByUserController = new ListCoordinatesByUserController();
const updateCoordinatesController = new UpdateCoordinatesController();

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

coordinatesRoutes.put(
  "/:id",
  ensureAuthenticated,
  updateCoordinatesController.handle
);

export { coordinatesRoutes };
