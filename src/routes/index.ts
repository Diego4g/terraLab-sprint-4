import { Router } from "express";

import { authenticationRouter } from "./authenticate.routes";
import { coordinatesRoutes } from "./coordinates.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use("/users", usersRouter);
router.use("/login", authenticationRouter);
router.use("/coordinates", coordinatesRoutes);

export { router };
