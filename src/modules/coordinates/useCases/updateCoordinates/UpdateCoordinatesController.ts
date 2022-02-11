import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCoordinatesUseCase } from "./UpdateCoordinatesUseCase";

export class UpdateCoordinatesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: coordinate_id } = request.params;
    const { latitude, longitude, description } = request.body;
    const updateCoordinateUseCase = container.resolve(UpdateCoordinatesUseCase);

    await updateCoordinateUseCase.execute({
      id: coordinate_id,
      latitude,
      longitude,
      description,
    });

    return response.status(201).send();
  }
}
