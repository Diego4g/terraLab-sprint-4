import { Request, Response } from "express";
import { container } from "tsyringe";

import { CoordinatesMap } from "../../mappers/CoordinatesMap";
import { ListCoordinatesByUserUseCase } from "./ListCoordinatesByUserUseCase";

export class ListCoordinatesByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const listCoordinatesByUserUseCase = container.resolve(
      ListCoordinatesByUserUseCase
    );

    const coordinates = await listCoordinatesByUserUseCase.execute(user_id);

    const coordinatesMap = coordinates.map((coordinate) =>
      CoordinatesMap.toDTO(coordinate)
    );

    return response.json(coordinatesMap);
  }
}
