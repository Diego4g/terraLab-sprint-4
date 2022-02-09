import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCoordinatesUseCase } from "./CreateCoordinatesUseCase";

export class CreateCoordinatesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;
    const { latitude, longitude } = request.query;

    const { id: user_id } = request.user;

    const createCoordinatesUseCase = container.resolve(
      CreateCoordinatesUseCase
    );

    await createCoordinatesUseCase.execute({
      latitude: Number(latitude),
      longitude: Number(longitude),
      description,
      user_id,
    });

    return response.status(201).send();
  }
}
