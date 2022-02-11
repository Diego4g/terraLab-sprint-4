import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCoordinatesUseCase } from "./DeleteCoordinatesUseCase";

export class DeleteCoordinatesController {
  async handle(request: Request, response: Response) {
    const { id: coordinates_id } = request.params;
    const deleteCoordinatesUseCase = container.resolve(
      DeleteCoordinatesUseCase
    );

    await deleteCoordinatesUseCase.execute(coordinates_id);

    return response.status(204).send();
  }
}
