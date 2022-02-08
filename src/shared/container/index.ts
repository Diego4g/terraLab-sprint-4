import { container } from "tsyringe";

import { CoordinatesRepository } from "../../modules/coordinates/repositories/CoordinatesRepository";
import { ICoordinatesRepository } from "../../modules/coordinates/repositories/ICoordinatesRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/repositories/UsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICoordinatesRepository>(
  "CoordinatesRepository",
  CoordinatesRepository
);
