import { inject, injectable } from "tsyringe";

import { Coordinates } from "../../entities/Coordinates";
import { ICoordinatesRepository } from "../../repositories/ICoordinatesRepository";

@injectable()
export class ListCoordinatesByUserUseCase {
  constructor(
    @inject("CoordinatesRepository")
    private repository: ICoordinatesRepository
  ) {}
  async execute(user_id: string): Promise<Coordinates[]> {
    const coordinates = await this.repository.findByUser(user_id);

    return coordinates;
  }
}
