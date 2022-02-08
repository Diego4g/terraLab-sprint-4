import { getRepository, Repository } from "typeorm";

import { ICreateCoordinatesDTO } from "../dtos/ICreateCoordinatesDTO";
import { Coordinates } from "../entities/Coordinates";
import { ICoordinatesRepository } from "./ICoordinatesRepository";

export class CoordinatesRepository implements ICoordinatesRepository {
  private repository: Repository<Coordinates>;
  constructor() {
    this.repository = getRepository(Coordinates);
  }
  async create({
    user_id,
    latitude,
    longitude,
    description,
  }: ICreateCoordinatesDTO): Promise<Coordinates> {
    const coordinate = this.repository.create({
      user_id,
      latitude,
      longitude,
      description,
    });

    await this.repository.save(coordinate);

    return coordinate;
  }
}
