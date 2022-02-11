import { inject, injectable } from "tsyringe";

import { Coordinates } from "../../entities/Coordinates";
import { ICoordinatesRepository } from "../../repositories/ICoordinatesRepository";

interface IRequest {
  id: string;
  latitude?: number;
  longitude?: number;
  description?: string;
}

@injectable()
export class UpdateCoordinatesUseCase {
  constructor(
    @inject("CoordinatesRepository")
    private repository: ICoordinatesRepository
  ) {}

  async execute({
    id: coordinate_id,
    latitude,
    longitude,
    description,
  }: IRequest): Promise<Coordinates> {
    const coordinate = await this.repository.findById(coordinate_id);

    coordinate.latitude = latitude || coordinate.latitude;
    coordinate.longitude = longitude || coordinate.longitude;
    coordinate.description = description || coordinate.description;

    await this.repository.updateById(
      coordinate_id,
      coordinate.latitude,
      coordinate.longitude,
      coordinate.description
    );

    return coordinate;
  }
}
