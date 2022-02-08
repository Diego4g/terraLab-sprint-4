import { inject, injectable } from "tsyringe";

import { ICreateCoordinatesDTO } from "../../dtos/ICreateCoordinatesDTO";
import { Coordinates } from "../../entities/Coordinates";
import { ICoordinatesRepository } from "../../repositories/ICoordinatesRepository";

@injectable()
export class CreateCoordinatesUseCase {
  constructor(
    @inject("CoordinatesRepository")
    private coordinatesRepository: ICoordinatesRepository
  ) {}

  async execute({
    user_id,
    latitude,
    longitude,
    description,
  }: ICreateCoordinatesDTO): Promise<Coordinates> {
    const coordinate = await this.coordinatesRepository.create({
      user_id,
      latitude,
      longitude,
      description,
    });

    return coordinate;
  }
}
