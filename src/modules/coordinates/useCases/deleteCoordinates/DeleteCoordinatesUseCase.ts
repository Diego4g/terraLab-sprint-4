import { inject, injectable } from "tsyringe";

import { ICoordinatesRepository } from "../../repositories/ICoordinatesRepository";

@injectable()
export class DeleteCoordinatesUseCase {
  constructor(
    @inject("CoordinatesRepository")
    private repository: ICoordinatesRepository
  ) {}

  async execute(coordinates_id: string): Promise<void> {
    this.repository.deleteById(coordinates_id);
  }
}
