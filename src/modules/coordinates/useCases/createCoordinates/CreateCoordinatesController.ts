import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCoordinatesUseCase } from "./CreateCoordinatesUseCase";

export class CreateCoordinatesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { latitude, longitude } = request.body;

    const { id: user_id } = request.params;

    const createCoordinatesUseCase = container.resolve(
      CreateCoordinatesUseCase
    );

    await createCoordinatesUseCase.execute({ latitude, longitude, user_id });

    return response.status(201).send();
  }
}
