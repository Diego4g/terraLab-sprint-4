import { Router } from "express";

import { coordinatesRoutes } from "./coordinates.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use("/users", usersRouter);
router.use("/coordinates/:id", coordinatesRoutes);

export { router };
